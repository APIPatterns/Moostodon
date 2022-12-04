import {UserUsage} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserUsageFromDiscriminatorValue(parseNode: ParseNode | undefined) : UserUsage {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UserUsage();
}
