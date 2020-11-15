import React, { useState, createContext } from 'react';

function AppContext() {
	const LangContext = createContext();
	const ThemeContext = createContext();

	const LangProvider = props => {

		const [lang, setLang] = useState('id');
		const langState = { lang, setLang };

		return(
			<LangContext.Provider value={ langState }>
				{ props.children }
			</LangContext.Provider>
		);
	}

	const ThemeProvider = props  => {
			const [ theme, setTheme ] = useState('light');
			const themeState = { theme, setTheme };

			return(
				<ThemeContext.Provider value={ themeState }>
					{ props.children }
				</ThemeContext.Provider>
			);
		}

	return {
		LangContext,
		ThemeContext,
		LangProvider,
		ThemeProvider
	}
}

export default AppContext();
