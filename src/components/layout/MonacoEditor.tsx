import { JSX, onMount } from 'solid-js'
import { tw } from 'twind'
import ExawaveIcon from '../icons/ExawaveIcon'
import { NavLink } from '@rturnq/solid-router'
import * as monaco from 'monaco-editor/esm/vs/editor/editor.main.js';

function MonacoEditor() {

  onMount(() => { 
    
    // self.MonacoEnvironment = {
    //   getWorkerUrl: function (moduleId, label) {
    //     if (label === 'json') {
    //       return './json.worker.js';
    //     }
    //     if (label === 'css' || label === 'scss' || label === 'less') {
    //       return './css.worker.js';
    //     }
    //     if (label === 'html' || label === 'handlebars' || label === 'razor') {
    //       return './html.worker.js';
    //     }
    //     if (label === 'typescript' || label === 'javascript') {
    //       return './ts.worker.js';
    //     }
    //     return './editor.worker.js';
    //   }
    // };
    
    const instance = monaco.editor.create(document.getElementById("monaco"));
    monaco.editor.getModels().forEach(model => model.dispose());
    var textModel = monaco.editor.createModel("SELECT * FROM Employees", "sql", monaco.Uri.parse("foo.sql"));

    // monaco.editor.defineTheme('darkTheme', theme);
    // monaco.editor.setTheme('darkTheme');
    
    instance.setModel(textModel);
  
    })
    
  return (
    <div id="monaco" class={`w-full h-full`}></div>
  )
}

export default MonacoEditor
