import type {
    Context,
    APIGatewayProxyStructuredResultV2,
    APIGatewayProxyEventV2,
    Handler,
} from "aws-lambda";

export const userLogin: Handler = async (
    _event: APIGatewayProxyEventV2,
    _context: Context
): Promise<APIGatewayProxyStructuredResultV2> => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "user successfully logged in",
        }),
    };
};
