import {ThumnailVersion} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createThumnailVersionFromDiscriminatorValue(parseNode: ParseNode | undefined) : ThumnailVersion {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ThumnailVersion();
}
