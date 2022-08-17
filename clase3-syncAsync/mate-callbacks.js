let production = () => {
    setTimeout(() => {
        console.log('Order received. Starting production...');
        setTimeout(() => {
            console.log('Calentar el agua en la pava (no hervir)');
            setTimeout(() => {
                console.log('Vertir yerba en mate');
                setTimeout(() => {
                    console.log('Tapar el mate con la mano y sacudir)');
                    setTimeout(() => {
                        console.log('Acomodar la terva de forma inclinada');
                    }, 3000)
                }, 2000)
            }, 5000)
        }, 5000)
    }, 8000)
    
}

production();