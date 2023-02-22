import core from "@nestia/core";
import typia from "typia";
import { Controller } from "@nestjs/common";

import { IBbsArticle } from "../dto/IBbsArticle";

@Controller("bbs/artcles")
export class BbsArticlesController {
    @core.EncryptedRoute.Get()
    public async index(): Promise<IBbsArticle[]> {
        return typia.random<IBbsArticle[]>();
    }

    @core.EncryptedRoute.Get(":id")
    public async at(
        @core.TypedParam("id", "uuid") id: string
    ): Promise<IBbsArticle> {
        id;
        return typia.random<IBbsArticle>();
    }

    @core.EncryptedRoute.Post()
    public async store(
        @core.EncryptedBody() input: IBbsArticle.IStore
    ): Promise<IBbsArticle> {
        input;
        return typia.random<IBbsArticle>();
    }

    @core.EncryptedRoute.Put(":id")
    public async update(
        @core.TypedParam("id", "uuid") id: string, 
        @core.TypedBody() input: IBbsArticle.IStore
    ): Promise<IBbsArticle> {
        id;
        input;
        return typia.random<IBbsArticle>();
    }
}
