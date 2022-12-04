import {PollOption} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPollOptionFromDiscriminatorValue(parseNode: ParseNode | undefined) : PollOption {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PollOption();
}
