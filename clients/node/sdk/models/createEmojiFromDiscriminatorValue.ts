import {Emoji} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEmojiFromDiscriminatorValue(parseNode: ParseNode | undefined) : Emoji {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Emoji();
}
