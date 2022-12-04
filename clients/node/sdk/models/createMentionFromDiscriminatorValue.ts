import {Mention} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMentionFromDiscriminatorValue(parseNode: ParseNode | undefined) : Mention {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Mention();
}
