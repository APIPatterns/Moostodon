import {Account} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccountFromDiscriminatorValue(parseNode: ParseNode | undefined) : Account {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Account();
}
