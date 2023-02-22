import { IAttachmentFile } from "./IAttachmentFile";

/**
 * Comment of {@link IBbsArticle}.
 * 
 * @author Samchon
 */
export interface IBbsComment {
    /**
     * Primary Key.
     * 
     * @format uuid
     */
    id: string;

    /**
     * Parent {@link IBbsArticle.id}.
     * 
     * Where this comment belongs to.
     * 
     * @format uuid
     */
    article_id: string;

    /**
     * Creation time.
     */
    created_at: string;
}
export namespace IBbsComment {
    /**
     * Store info of {@link IBbsComment}.
     */
    export interface IStore {
        /**
         * Main content.
         * 
         * Note that, format of this content follows {@link format}.
         */
        content: string;

        /**
         * Format of {@link content}.
         */
        format: "txt" | "markdown" | "html";

        /**
         * Attachment files.
         */
        files: IAttachmentFile[];
    }
}
export namespace IBbsComment {
    /**
     * Store info of {@link IBbsComment}.
     */
    export interface IStore {
        /**
         * Main content.
         * 
         * Note that, format of this content follows {@link format}.
         */
        content: string;

        /**
         * Format of {@link content}.
         */
        format: "txt" | "markdown" | "html";

        /**
         * Attachment files.
         */
        files: IAttachmentFile[];
    }
}