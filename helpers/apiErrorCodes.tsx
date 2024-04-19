export const API_ERROR_CODES = {
    SUCCESS: 200,
    INVALID_PARAMS: 400,
    INVALID_TOKEN: 401,
    PUBKEY_EXISTED: 402,
    MISMATCH_REWARD_ADDRESS: 403,
    SYSTEM_ERROR:500
};

const API_RESPONSE = {
    "code": 200,
    "data": {},
    "msg": "success message",
    "success": true
}

export class BizError extends Error {
    code?: number
    data?: any

    constructor(code?: number, data?: any, message?: string) {
        super(message);
        this.code = code
        this.data = data
    }
}


export class HttpError extends Error {
    httpCode?: number

    constructor(httpCode?: number, message?: string) {
        super(message);
        this.httpCode = httpCode
    }
}

export class PageError extends Error {

    constructor(message?: string) {
        super(message);
    }
}

export const getErrorMessage = (error: Error, t: any) => {
    if (error instanceof PageError) {
        return t('page_error')
    } else if (error instanceof HttpError) {
        return t('network_error')
    } else if (error instanceof BizError) {
        return error.message
    }
}