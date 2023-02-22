import { IAttachmentFile } from "./IAttachmentFile";

/**
 * Snapshot of an {@link IBbsArticle}.
 * 
 * @author Samchon
 */
export interface IBbsArticleSnapshot {
    /**
     * @format uuid
     */
    id: string;

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

    /**
     * Attachment files.
     */
    files: IAttachmentFile[];

    /**
     * Creation or update time.
     */
    created_at: string;
}