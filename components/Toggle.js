const Toggle = () => {

    const [theme , setTheme] = React.useState('light-theme')
    const toggleTheme = () => {
        theme ==="dark-theme" ? setTheme('light-theme') : setTheme('dark-theme')
        para ==="dark-theme" ? setPara('This is light theme') : setPara('This is dark theme')
    }
    React.useEffect(()=>{
        document.body.className = theme;
    }, [theme]);

    return (
        <>
            <div className="container">
                <a href="#" className="toggle" onClick={toggleTheme}>Toggle Mode</a>
                
            </div>
            
        </>
    )
}