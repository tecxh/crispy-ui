export const mockRequest = async () => {
    const passed = await new Promise<boolean | string>((resolve, reject) => {
        setTimeout(() => resolve(true), 1000);
    })

    return passed;
} 