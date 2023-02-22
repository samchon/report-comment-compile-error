import { IAttachmentFile } from "./IAttachmentFile";

/**
 * Snapshot content of {@link IBbsComment}.
 * 
 * @author Samchon
 */
export interface IBbsCommentSnapshot {
    /**
     * @format uuid
     */
    id: string;

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

    /**
     * Creation or update time.
     */
    created_at: string;
}