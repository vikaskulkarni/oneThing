import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function main(event, context) {
  const data = JSON.parse(event.body);
  const params = {
    TableName: "notes19",
    // 'Key' defines the partition key and sort key of the item to be updated
    // - 'noteId': path parameter
    Key: {
      noteId: event.pathParameters.id,
    },
    // 'UpdateExpression' defines the attributes to be updated
    // 'ExpressionAttributeValues' defines the value in the update expression
    UpdateExpression:
      "SET lastUpdated = :lastUpdated, oneThingBefore = :oneThingBefore, \
      oneThingAfter = :oneThingAfter, uniqueName = :uniqueName, location = :location",
    ExpressionAttributeValues: {
      ":lastUpdated": data.lastUpdated || null,
      ":oneThingBefore": data.oneThingBefore || null,
      ":oneThingAfter": data.oneThingAfter || null,
      ":uniqueName": data.uniqueName || null,
      ":location": data.location || null,
    },
    // 'ReturnValues' specifies if and how to return the item's attributes,
    // where ALL_NEW returns all attributes of the item after the update; you
    // can inspect 'result' below to see how it works with different settings
    ReturnValues: "ALL_NEW",
  };

  try {
    const result = await dynamoDbLib.call("update", params);
    return success({ status: true });
  } catch (e) {
    return failure({ status: false });
  }
}
