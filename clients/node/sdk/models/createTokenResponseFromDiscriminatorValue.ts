import {TokenResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTokenResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TokenResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TokenResponse();
}
