import fetch from 'node-fetch';

const baseUrl = "";


export const get = async (url, auth = '') => {
    // @ts-ignore
    return fetch(baseUrl + url, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${auth}`,
        },
    });
};
export const apiDelete = async (url, auth = '') => {
    // @ts-ignore
    return fetch(baseUrl + url, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${auth}`,
        },
    });
};

export const put = async (url, body, auth = '') => {
    // @ts-ignore
    return fetch(baseUrl + url, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
            Authorization: `Bearer ${auth}`,
            'Content-Type': 'application/json',
        },
    });
};

export const patch = async (url, body, auth = '') => {
    // @ts-ignore
    return fetch(baseUrl + url, {
        method: 'PATCH',
        body: JSON.stringify(body),
        headers: {
            Authorization: `Bearer ${auth}`,
            'Content-Type': 'application/json',
        },
    });
};

export const post = async (url, body) => {
    // @ts-ignore
    return fetch(baseUrl + url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
        },
    });
};
export const postFile = (url, body, auth = '') => {
    // @ts-ignore
    return fetch(baseUrl + url, {
        method: 'POST',
        body,
        headers: {
            Authorization: `Bearer ${auth}`,
        },
    });
};

export const handleError = res => {
    if (res.data && res.data[0].msg) return res.data[0].msg;
    if (res.message) return res.message;
    return res;
};

export const handleResult = async (
    res,
    e400 = '',
    e500 = '  Internal error',
) => {
    const resData = await res.json();
    if (res && resData && res.status < 400) {
        return resData;
    }
    if (e400) throw new Error(e400);
    else if (!res) throw new Error(`Server Error ${e500}`);
    else if (!resData) throw new Error(`Server Error ${e500}`);
    else throw new Error(handleError(resData));
};
