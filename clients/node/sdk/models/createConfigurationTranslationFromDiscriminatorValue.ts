import {ConfigurationTranslation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConfigurationTranslationFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConfigurationTranslation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConfigurationTranslation();
}
