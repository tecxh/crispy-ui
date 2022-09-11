export const mockRequest = async () => {
    const passed = await new Promise<boolean | string>((resolve, reject) => {
        setTimeout(() => {
            const num = Math.random();

            if (num > 0.25) {
                resolve(true);
                return;
            };
    
            reject(false)
    
        }, 1000);
    })

    return passed;
} 