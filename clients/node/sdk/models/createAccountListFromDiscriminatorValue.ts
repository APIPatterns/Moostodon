import {AccountList} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccountListFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccountList {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccountList();
}
