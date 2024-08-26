import {
  Body,
  Get,
  JsonController,
  Param,
  Post,
  UseAfter,
} from "routing-controllers";
import { validate } from "class-validator";
import { IPerson } from "./Person.types";

import { ApiResponse } from "../../../helpers/ApiResponse";
import { ApiError } from "../../../helpers/ApiErrors";
import { CreatePerson } from "./CreatePerson.dto";
import { HTTPResponseLogger } from "../../middlewares/HTTPResponseLogger";

const storeData: IPerson[] = [];

@JsonController("/person")
export class Person {
  @Get()
  @UseAfter(HTTPResponseLogger)
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
  async setPerson(@Body() body: CreatePerson) {
    const errors = await validate(body);

    if (errors.length > 0) {
      throw new ApiError(400, {
        message: "Validation failed",
        code: "PERSON_VALIDATION_ERROR",
        errors,
      });
    }

    const id = storeData.length;

    storeData.push({ ...body, id });

    // return true;
    return new ApiResponse(true, null, "Person successfully created");
  }
}
