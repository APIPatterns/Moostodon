import {Usage} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUsageFromDiscriminatorValue(parseNode: ParseNode | undefined) : Usage {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Usage();
}
