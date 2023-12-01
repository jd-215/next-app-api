// object type interface
export interface jsonDataTypes {
    [ key: string ]: string | object | boolean ;
}

// status code for response 
// 100 = continue 
// 102 = processing
// 200 = ok
// 202 = accepted
// 307 = temporary redirect
// 308 = permanent redirect
// 400 = bad request
// 401 = unauthorized
// 402 = payment required
// 404 = not found
// 500 = internal server error
// 504 = gateway timeout

export type statusCode = 100 | 102 | 200 | 202 | 307 | 308 |400 | 401 | 402 | 404 | 500 | 504