import {MediaAttachment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMediaAttachmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : MediaAttachment {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MediaAttachment();
}
