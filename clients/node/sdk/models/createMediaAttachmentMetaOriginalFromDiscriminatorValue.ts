import {MediaAttachmentMetaOriginal} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMediaAttachmentMetaOriginalFromDiscriminatorValue(parseNode: ParseNode | undefined) : MediaAttachmentMetaOriginal {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MediaAttachmentMetaOriginal();
}
