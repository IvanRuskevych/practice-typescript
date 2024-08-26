import { Body, Get, JsonController, Param, Post } from "routing-controllers";
import { IPerson } from "./Person.types";

import { ApiResponse } from "../../../helpers/ApiResponse";
import { ApiError } from "../../../helpers/ApiErrors";

const storeData: IPerson[] = [];

@JsonController("/person")
export class Person {
  @Get()
  async getAll() {
    // return storeData;
    return new ApiResponse(true, storeData);
  }

  @Get("/:id")
  async getOne(@Param("id") id: number): Promise<ApiResponse<IPerson | {}>> {
    const person = storeData.find((item) => item.id === id);

    if (!person) {
      throw new ApiError(404, {
        code: "PERSON_NOT_FOUND",
        message: `Person with id ${id} not found`,
      });
    }

    // return person || {};
    return new ApiResponse(true, person);
  }

  @Post()
  async setPerson(@Body() body: IPerson) {
    storeData.push(body);

    // return true;
    return new ApiResponse(true, null, "Person successfully created");
  }
}
