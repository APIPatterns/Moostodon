import {ConfigurationUrls} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConfigurationUrlsFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConfigurationUrls {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConfigurationUrls();
}
