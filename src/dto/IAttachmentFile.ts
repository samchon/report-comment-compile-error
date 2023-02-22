/**
 * Attachment file.
 * 
 * Attachment file stored in {@link IBbsArticleSnapshot} or {@link IBbsCommentSnapshot}.
 * 
 * @author Samchon
 */
export interface IAttachmentFile extends IAttachmentFile.IStore {
    /**
     * Primary Key.
     * 
     * @format uuid
     */
    id: string;
}
export namespace IAttachmentFile {
    /**
     * Store info of {@link IAttachmentFile}.
     */
    export interface IStore {
        /**
         * Name of file.
         * 
         * Note that, the name does not include {@link extension}.
         * 
         * Also, it is possible to omit {@link name} property like `.gitignore` file.
         * However, omitting both {@link name} and {@link extension} is not possible.
         * 
         * @maxLength 255
         */
        name: string | null;

        /**
         * Extension of file.
         * 
         * It is possible to omit {@link extension} like `LICENSE` file.
         * However, omitting both {@link name} and {@link extension} is not possible.
         * 
         * @maxLength 8
         */
        extension: string | null;

        /**
         * URL Address of file.
         * 
         * @format url
         */
        url: string;
    }
}