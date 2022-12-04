import {MediaAttachmentMeta} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMediaAttachmentMetaFromDiscriminatorValue(parseNode: ParseNode | undefined) : MediaAttachmentMeta {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MediaAttachmentMeta();
}
