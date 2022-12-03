import {UnprocessableContentError} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnprocessableContentErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnprocessableContentError {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnprocessableContentError();
}
