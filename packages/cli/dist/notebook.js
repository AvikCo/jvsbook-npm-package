[{"content":"# JBook\nThis is an interactive coding environment. You can write Javascript, see it executed, and write comprehensive documentation using markdown.\n*  Click any text cell (including this one) to edit it\n* The code in each code editor is all joined together into one file. If you define a variable in cell #1, you can refer to it in any following cell!\n* You can show any React component, string, number, or anything else by calling `show` function. This is a function built into this environment. Call show multiple times to show multiple values\n* Re-order or delete cell using the button on the top right\n* Add new cells by hovering on the divider between each cell\nAll of your changes get saved to the file you opened JBook with. So if you ran `npm jBook serve test.js`, all of the test and code you write will be saved to the `text.js` file. \n","type":"text","id":"h9m"},{"content":"import React, { useState } from 'react';\n\nconst Counter = () => {\n  const [count, setCount] = useState(0);\n  return (\n    <div>\n      <button onClick={() => setCount(count + 1)}>Click</button>\n      <h3>Count: {count}</h3>\n    </div>\n  );\n};\n\n// Display any variable or React Component by calling 'show'\nshow(<Counter />);","type":"code","id":"y9m"},{"content":"const SecondCount = () => {\n  return (\n    <div>\n      <h3>App Says Hi!</h3>\n      <i>Counter component will be rendered below...</i>\n      <hr />\n      {/* \n        Counter was declared in an earlier cell - \n        we can reference it here! \n      */}\n      <Counter />\n    </div>\n  );\n};\n\nshow(<SecondCount />);","type":"code","id":"msi"},{"content":"import axios from 'axios';\n\naxios.get('https://jsonplaceholder.typicode.com/users/2').then(({ data }) => {\n  show(data.name)\n});","type":"code","id":"ici"}]