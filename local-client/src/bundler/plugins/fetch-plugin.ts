import * as esbuild from 'esbuild-wasm'
import axios from 'axios';
import localForage from 'localforage';


//initializing a db in IndexedDB to store cache
const filecache = localForage.createInstance({
  name: 'filecache'
});

export const fetchPlugin = (inputCode: string) => {
  return {
    name: 'fetch-plugin',
    setup(build: esbuild.PluginBuild) {

      build.onLoad({ filter: /(^index\.js$)/ }, () => {
        return {
          loader: 'jsx',
          contents: inputCode,
        }
      });

      build.onLoad({ filter: /.*/ }, async (args: any) => {
        //Check to see if we have already fetch this file
        //and if it is in the cache
        const cacheResult = await filecache.getItem<esbuild.OnLoadResult>(args.path);

        //if it is, return it immediately
        if (cacheResult) {
          return cacheResult;
        }
      })
      
      build.onLoad({ filter: /.css$/ }, async (args: any) => {
        console.log('onLoad', args);

        //Check to see if we have already fetch this file
        //and if it is in the cache
        

        const { data, request } = await axios.get(args.path);

        // const fileType = args.path.match(/.css$/) ? 'css' : 'jsx';
        const escaped = data
          .replace(/\n/g, ' ')
          .replace(/"/g, '\\"')
          .replace(/'/g, "//'");
        const contains =
          `
          const style = document.createElement('style');
          style.innerText = '${escaped}';
          document.head.appendChild(style);
          `;
        
        const result: esbuild.OnLoadResult = {
          loader: 'jsx',
          contents: contains,
          resolveDir: new URL('./', request.responseURL).pathname
        }

        //store the response in cacheResult
        await filecache.setItem(args.path, result);

        return result;
        
});
      build.onLoad({ filter: /.*/ }, async (args: any) => {
        console.log('onLoad', args);

        
        
        const { data, request } = await axios.get(args.path);
        const result: esbuild.OnLoadResult = {
          loader: 'jsx',
          contents: data,
          resolveDir: new URL('./', request.responseURL).pathname
        }

        //store the response in cacheResult
        await filecache.setItem(args.path, result);

        return result;
      });

    }
  }
};