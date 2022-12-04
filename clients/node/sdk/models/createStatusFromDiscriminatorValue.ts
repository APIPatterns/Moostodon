import {Status} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) : Status {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Status();
}
