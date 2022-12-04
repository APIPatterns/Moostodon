import {Poll} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPollFromDiscriminatorValue(parseNode: ParseNode | undefined) : Poll {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Poll();
}
