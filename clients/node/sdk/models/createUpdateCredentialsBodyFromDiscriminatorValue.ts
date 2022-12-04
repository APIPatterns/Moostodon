import {UpdateCredentialsBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUpdateCredentialsBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : UpdateCredentialsBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UpdateCredentialsBody();
}
