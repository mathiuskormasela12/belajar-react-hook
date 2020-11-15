import React, { useContext } from "react";
import AppContext from './AppContext';
import "./App.css";

const { 
	LangProvider, 
	LangContext,
	ThemeProvider,
	ThemeContext
} = AppContext;

function LangPage() {

  return (	
		<LangProvider>
			<ThemeProvider>
		    <Header />
  		  <Content />
    		<Footer />
			</ThemeProvider>
		</LangProvider>
  );
}

function Header() {
  return (
    <>
      <i>-- Header --</i>
      <Menu />
    </>
  );
}

function Menu() {

  console.log('menu render')
	const props = useContext(LangContext) ;
	const propsTheme = useContext(ThemeContext);


	const handleLang = (props, e) => {
		props.setLang(e.target.value);
	}

  return (
    <>
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>
          Languange
          <select value={ props.lang } onChange={ e => props.setLang(e.target.value )}> 
            <option value="en"> English </option>
            <option value="id">  Indonesia </option>
          </select>
        </li>
        <li>
          Theme
          <select value={ propsTheme.theme } onChange={ e => propsTheme.setTheme(e.target.value)}>
            <option value="light"> Light </option>
            <option value="dark"> Dark </option>
          </select>
        </li>
      </ul>
    </>
  );
}

function Content() {
  console.log("content render");
  return (
    <>
      <i>-- Content --</i>
      <h3> 🤙 Hello React Context </h3>
    </>
  );
}

function Footer() {
	const props = useContext(LangContext);
	const propsTheme = useContext(ThemeContext);
  console.log("footer render")
  return (
					<div>
						<i>-- Footer --</i>
		  	    <p>Languange : { props.lang } </p>
  		  	  <p>Theme :  { propsTheme.theme }</p>
					</div>
				)
}

export default LangPage;
