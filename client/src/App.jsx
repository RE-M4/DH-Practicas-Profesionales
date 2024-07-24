// importar componentes y  css
import React from 'react';
//components
import Access from './assets/components/Access';
import Menu from './assets/components/Menu';
import Content from './assets/components/Content';

//css
import './assets/css/normalize.min.css';
import './assets/css/style.css';
import './assets/css/bootstrap.min.css';
import './assets/css/font-awesome.min.css';

function App() {
  return (
    <div className="dashboard">
      <Access />
      <Menu />
      <Content />
    </div>
  );
}
export default App;