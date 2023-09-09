import type {
    Context,
    APIGatewayProxyStructuredResultV2,
    APIGatewayProxyEventV2,
    Handler,
} from "aws-lambda";
import { IUser, generateRandomID } from "@lambda-microservice/common";

export const userLogin: Handler = async (
    event: APIGatewayProxyEventV2,
    _context: Context
): Promise<APIGatewayProxyStructuredResultV2> => {
    const userPayload: IUser = JSON.parse(event.body as string);
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "user successfully logged in",
            typeMatch: true,
            randomUUID: generateRandomID(),
        }),
    };
};
