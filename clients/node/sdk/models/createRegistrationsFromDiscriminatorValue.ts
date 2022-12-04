import {Registrations} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRegistrationsFromDiscriminatorValue(parseNode: ParseNode | undefined) : Registrations {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Registrations();
}
