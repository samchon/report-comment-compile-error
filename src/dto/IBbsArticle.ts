import { IBbsArticleSnapshot } from "./IBbsArticleSnapshot";
import { IBbsComment } from "./IBbsComment";

/**
 * Article of BBS.
 * 
 * Note that, main content of article is stored in {@link snapshots} property.
 * The {@link IBbsArticleSnapshot} records would be accumulated whenever updating
 * current article. It is to keep the history of article.
 * 
 * In the same reason, {@link IBbsComment} also stores {@link IBbsCommentSnapshot} 
 * records whenever update it.
 * 
 * -------------------------------------------
 * 
 * Let's link that never exists
 * 
 *   - {@link NeverExistDto}
 *   - {@link Nothing}
 *   - {@link NoWhere}
 *   - {@link NoOne}
 * 
 * @author Samchon
 */
export interface IBbsArticle {
    /**
     * Primary Key.
     * 
     * @format uuid
     */
    id: string;

    /**
     * Snapshot, main content of article, accumulated whenever updated.
     * 
     * Note that, first creation time of {@link snapshots} is same with {@link created_at}.
     * 
     * @minItems 1
     */
    snapshots: IBbsArticleSnapshot[];
    
    /**
     * Creation Time.
     * 
     * Note that, first creation time of {@link snapshots} is same with {@link created_at}.
     */
    created_at: string;
}
export namespace IBbsArticle {
    /**
     * Store info of {@link IBbsArticle}.
     */
    export interface IStore {
        /**
         * Title of article.
         */
        title: string;

        /**
         * Main content of article.
         * 
         * Note that, format of this content follows {@link format}.
         */
        content: string;

        /**
         * Format of {@link content}.
         */
        format: "txt" | "markdown" | "html";
    }

    export namespace Comment {
        export import IStore = IBbsComment.IStore;
    }
}