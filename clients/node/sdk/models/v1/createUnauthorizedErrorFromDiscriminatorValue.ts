import {UnauthorizedError} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnauthorizedErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnauthorizedError {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnauthorizedError();
}
