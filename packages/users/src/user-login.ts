import type {
    Context,
    APIGatewayProxyStructuredResultV2,
    APIGatewayProxyEventV2,
    Handler,
} from "aws-lambda";
import { IUser, generateRandomID } from "@lambda-microservice/common";
import * as dotenv from "dotenv";
dotenv.config();

export const userLogin: Handler = async (
    event: APIGatewayProxyEventV2,
    _context: Context
): Promise<APIGatewayProxyStructuredResultV2> => {
    try {
        const userPayload: IUser = JSON.parse(event.body as string);
        if (!userPayload.name) {
            throw new Error("Invalid payload");
        }
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "user successfully logged in",
                typeMatch: true,
                randomUUID: generateRandomID(),
                env: process.env.STAGE || "PROD",
            }),
        };
    } catch (error) {
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "error in user login",
                error: error,
            }),
        };
    }
};
