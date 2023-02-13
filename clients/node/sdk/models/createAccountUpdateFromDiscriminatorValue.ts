import {AccountUpdate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccountUpdateFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccountUpdate {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccountUpdate();
}
