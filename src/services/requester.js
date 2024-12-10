export const request = async (method, url, data) => {
    try {
        let buildRequest;

        if (method == 'GET') {
            buildRequest = fetch(url);
        } else {
            buildRequest = fetch(url, {
                method,

            })
        }
        const response = await request;

        const result = await response.json();

        return result;
    } catch (error) {
        console.log(error);
    }
}