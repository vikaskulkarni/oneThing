import * as uuid from "uuid";
import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function main(event, context) {
  const data = JSON.parse(event.body);
  const params = {
    TableName: "notes19",
    Item: {
      noteId: uuid.v1(),
      lastUpdated: data.lastUpdated,
      oneThingBefore: data.oneThingBefore,
      oneThingAfter: data.oneThingAfter,
      location: data.location || "NA",
      uniqueName: data.uniqueName || "NA",
      createdAt: Date.now()
    }
  };

  try {
    await dynamoDbLib.call("put", params);
    return success(params.Item);
  } catch (e) {
    return failure({ status: false, error: e });
  }
}
