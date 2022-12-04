import {MuteBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMuteBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : MuteBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MuteBody();
}
