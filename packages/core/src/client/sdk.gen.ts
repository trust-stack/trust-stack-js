// This file is auto-generated by @hey-api/openapi-ts

import { createClient, createConfig, type Options } from '@hey-api/client-fetch';
import type { HealthCheckData, LinkCanvasTemplateInstanceData, LinkCanvasTemplateInstanceResponse, GetThemesData, GetThemesResponse, CreateThemeData, CreateThemeResponse, DeleteThemeData, GetThemeData, GetThemeResponse, UpdateThemeData, UpdateThemeResponse, GetLinkSetsData, GetLinkSetsResponse, CreateLinkSetData, CreateLinkSetResponse, DeleteLinkSetData, GetLinkSetData, GetLinkSetResponse, UpdateLinkSetData, UpdateLinkSetResponse, GetCanvasTemplateData, GetCanvasTemplateResponse, CreateCanvasTemplateData, CreateCanvasTemplateResponse, RenderCanvasTemplateData, RenderCanvasTemplateResponse, GetCredentialIssuerProfilesData, GetCredentialIssuerProfilesResponse, CreateCredentialIssuerProfileData, CreateCredentialIssuerProfileResponse, DeleteCredentialIssuerProfileData, DeleteCredentialIssuerProfileResponse, GetCredentialIssuerProfileData, GetCredentialIssuerProfileResponse, GetCredentialData, IssueCredentialData, IssueCredentialResponse2, VerifyCredentialData, VerifyCredentialResponse2, GetTenantUsersData, GetTenantUsersResponse, CreateTenantUserData, CreateTenantUserResponse, DeleteTenantUserData, GetTenantUserByIdData, GetTenantUserByIdResponse, UpdateTenantUserData, UpdateTenantUserResponse, ClearSandboxData, GetCustodyCommissionsData, GetCustodyCommissionsResponse, CreateCustodyCommissionData, CreateCustodyCommissionResponse, DeleteCustodyCommissionData, DeleteCustodyCommissionResponse, GetCustodyCommissionData, GetCustodyCommissionResponse, UpdateCustodyCommissionData, UpdateCustodyCommissionResponse, ConsumeCustodyCommissionData, ConsumeCustodyCommissionResponse, GetDidsData, GetDidsResponse, CreateDidData, CreateDidResponse, DeleteDidData, DeleteDidResponse, GetDidData, GetDidResponse, CreateDppData, CreateDppResponse, DeleteDppData, GetDppData, GetDppResponse, GetEventTagsData, GetEventTagsResponse, CreateEventTagData, CreateEventTagResponse, SetEventTagsData, SetEventTagsResponse, DeleteEventTagData, GetEventTagData, GetEventTagResponse, GetEventsData, GetEventsResponse, CreateEventData, CreateEventResponse, DeleteEventData, GetEventData, GetEventResponse, GetManyExternalResolversData, CreateExternalResolverData, DeleteExternalResolverData, GetExternalResolverData, UpdateExternalResolverData, GetLocationsData, GetLocationsResponse, CreateLocationData, CreateLocationResponse, GetLocationData, GetLocationResponse, GetTradeItemsData, GetTradeItemsResponse, CreateTradeItemData, CreateTradeItemResponse, DeleteTradeItemData, GetTradeItemData, GetTradeItemResponse, GetTradeItemByIdentifierData, GetTradeItemByIdentifierResponse, CreateOrganizationData, CreateOrganizationResponse, DeleteOrganizationData, GetOrganizationData, GetOrganizationResponse, UpdateOrganizationData, UpdateOrganizationResponse, CreateSchemaData, CreateSchemaResponse, DeleteSchemaData, GetSchemaData, GetSchemaResponse, UpdateSchemaData, UpdateSchemaResponse, GetTrustGraphData, GetTrustGraphResponse, TraverseTrustGraphData, TraverseTrustGraphResponse } from './types.gen';

export const client = createClient(createConfig());

/**
 * Health Check
 */
export const healthCheck = <ThrowOnError extends boolean = false>(options?: Options<HealthCheckData, ThrowOnError>) => {
    return (options?.client ?? client).get<unknown, unknown, ThrowOnError>({
        ...options,
        url: '/health/status'
    });
};

/**
 * Link canvas template instance
 * Create a link to a canvas template instance via the Hermes resolver.
 */
export const linkCanvasTemplateInstance = <ThrowOnError extends boolean = false>(options: Options<LinkCanvasTemplateInstanceData, ThrowOnError>) => {
    return (options?.client ?? client).post<LinkCanvasTemplateInstanceResponse, unknown, ThrowOnError>({
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        },
        url: '/canvas-template-instances/{id}/link'
    });
};

/**
 * Get all themes
 */
export const getThemes = <ThrowOnError extends boolean = false>(options?: Options<GetThemesData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetThemesResponse, unknown, ThrowOnError>({
        ...options,
        url: '/themes'
    });
};

/**
 * Create Theme
 * Create a new theme
 */
export const createTheme = <ThrowOnError extends boolean = false>(options: Options<CreateThemeData, ThrowOnError>) => {
    return (options?.client ?? client).post<CreateThemeResponse, unknown, ThrowOnError>({
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        },
        url: '/themes'
    });
};

/**
 * Delete a theme by id
 */
export const deleteTheme = <ThrowOnError extends boolean = false>(options: Options<DeleteThemeData, ThrowOnError>) => {
    return (options?.client ?? client).delete<unknown, unknown, ThrowOnError>({
        ...options,
        url: '/themes/{id}'
    });
};

/**
 * Get Theme
 * Get a theme by id
 */
export const getTheme = <ThrowOnError extends boolean = false>(options: Options<GetThemeData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetThemeResponse, unknown, ThrowOnError>({
        ...options,
        url: '/themes/{id}'
    });
};

/**
 * Update a theme by id
 */
export const updateTheme = <ThrowOnError extends boolean = false>(options: Options<UpdateThemeData, ThrowOnError>) => {
    return (options?.client ?? client).put<UpdateThemeResponse, unknown, ThrowOnError>({
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        },
        url: '/themes/{id}'
    });
};

/**
 * Get Link Sets
 */
export const getLinkSets = <ThrowOnError extends boolean = false>(options?: Options<GetLinkSetsData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetLinkSetsResponse, unknown, ThrowOnError>({
        ...options,
        url: '/link-sets'
    });
};

/**
 * Create Link Set
 */
export const createLinkSet = <ThrowOnError extends boolean = false>(options: Options<CreateLinkSetData, ThrowOnError>) => {
    return (options?.client ?? client).post<CreateLinkSetResponse, unknown, ThrowOnError>({
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        },
        url: '/link-sets'
    });
};

/**
 * Delete Link Set
 */
export const deleteLinkSet = <ThrowOnError extends boolean = false>(options: Options<DeleteLinkSetData, ThrowOnError>) => {
    return (options?.client ?? client).delete<unknown, unknown, ThrowOnError>({
        ...options,
        url: '/link-sets/{id}'
    });
};

/**
 * Get Link Set
 */
export const getLinkSet = <ThrowOnError extends boolean = false>(options: Options<GetLinkSetData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetLinkSetResponse, unknown, ThrowOnError>({
        ...options,
        url: '/link-sets/{id}'
    });
};

/**
 * Update Link Set
 */
export const updateLinkSet = <ThrowOnError extends boolean = false>(options: Options<UpdateLinkSetData, ThrowOnError>) => {
    return (options?.client ?? client).put<UpdateLinkSetResponse, unknown, ThrowOnError>({
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        },
        url: '/link-sets/{id}'
    });
};

/**
 * Get Canvas Template
 * Get a Canvas Template by id.
 */
export const getCanvasTemplate = <ThrowOnError extends boolean = false>(options: Options<GetCanvasTemplateData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetCanvasTemplateResponse, unknown, ThrowOnError>({
        ...options,
        url: '/canvas-templates/{id}'
    });
};

/**
 * Create Canvas Template
 * Create a Canvas Template.
 */
export const createCanvasTemplate = <ThrowOnError extends boolean = false>(options: Options<CreateCanvasTemplateData, ThrowOnError>) => {
    return (options?.client ?? client).post<CreateCanvasTemplateResponse, unknown, ThrowOnError>({
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        },
        url: '/canvas-templates'
    });
};

/**
 * Render Canvas Template
 * Create an instance of a Canvased Template.
 */
export const renderCanvasTemplate = <ThrowOnError extends boolean = false>(options: Options<RenderCanvasTemplateData, ThrowOnError>) => {
    return (options?.client ?? client).post<RenderCanvasTemplateResponse, unknown, ThrowOnError>({
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        },
        url: '/canvas-templates/{id}/render'
    });
};

/**
 * Get Credential Issuer Profiles
 * Get all credential issuer profiles
 */
export const getCredentialIssuerProfiles = <ThrowOnError extends boolean = false>(options: Options<GetCredentialIssuerProfilesData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetCredentialIssuerProfilesResponse, unknown, ThrowOnError>({
        ...options,
        url: '/credential-issuer-profiles'
    });
};

/**
 * Create Credential Issuer Profile
 * Create a new credential issuer profile
 */
export const createCredentialIssuerProfile = <ThrowOnError extends boolean = false>(options: Options<CreateCredentialIssuerProfileData, ThrowOnError>) => {
    return (options?.client ?? client).post<CreateCredentialIssuerProfileResponse, unknown, ThrowOnError>({
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        },
        url: '/credential-issuer-profiles'
    });
};

/**
 * Delete Credential Issuer Profile
 * Delete a credential issuer profile by ID
 */
export const deleteCredentialIssuerProfile = <ThrowOnError extends boolean = false>(options: Options<DeleteCredentialIssuerProfileData, ThrowOnError>) => {
    return (options?.client ?? client).delete<DeleteCredentialIssuerProfileResponse, unknown, ThrowOnError>({
        ...options,
        url: '/credential-issuer-profiles/{id}'
    });
};

/**
 * Get Credential Issuer Profile
 * Get a credential issuer profile by ID
 */
export const getCredentialIssuerProfile = <ThrowOnError extends boolean = false>(options: Options<GetCredentialIssuerProfileData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetCredentialIssuerProfileResponse, unknown, ThrowOnError>({
        ...options,
        url: '/credential-issuer-profiles/{id}'
    });
};

/**
 * Get Credential
 * Retrieves a credential by its ID.
 */
export const getCredential = <ThrowOnError extends boolean = false>(options: Options<GetCredentialData, ThrowOnError>) => {
    return (options?.client ?? client).get<unknown, unknown, ThrowOnError>({
        ...options,
        url: '/credentials/{id}'
    });
};

/**
 * Issue Credential
 * Issues a credential and returns it in the response body.
 */
export const issueCredential = <ThrowOnError extends boolean = false>(options: Options<IssueCredentialData, ThrowOnError>) => {
    return (options?.client ?? client).post<IssueCredentialResponse2, unknown, ThrowOnError>({
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        },
        url: '/credentials/issue'
    });
};

/**
 * Verify Credential
 * Verifies a verifiableCredential and returns a verificationResult in the response body.
 */
export const verifyCredential = <ThrowOnError extends boolean = false>(options: Options<VerifyCredentialData, ThrowOnError>) => {
    return (options?.client ?? client).post<VerifyCredentialResponse2, unknown, ThrowOnError>({
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        },
        url: '/credentials/verify'
    });
};

/**
 * Get all tenant users
 */
export const getTenantUsers = <ThrowOnError extends boolean = false>(options?: Options<GetTenantUsersData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetTenantUsersResponse, unknown, ThrowOnError>({
        ...options,
        url: '/auth/tenant-users'
    });
};

/**
 * Create a tenant user
 */
export const createTenantUser = <ThrowOnError extends boolean = false>(options: Options<CreateTenantUserData, ThrowOnError>) => {
    return (options?.client ?? client).post<CreateTenantUserResponse, unknown, ThrowOnError>({
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        },
        url: '/auth/tenant-users'
    });
};

/**
 * Delete a tenant user
 */
export const deleteTenantUser = <ThrowOnError extends boolean = false>(options: Options<DeleteTenantUserData, ThrowOnError>) => {
    return (options?.client ?? client).delete<unknown, unknown, ThrowOnError>({
        ...options,
        url: '/auth/tenant-users/{id}'
    });
};

/**
 * Get a tenant user by ID
 */
export const getTenantUserById = <ThrowOnError extends boolean = false>(options: Options<GetTenantUserByIdData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetTenantUserByIdResponse, unknown, ThrowOnError>({
        ...options,
        url: '/auth/tenant-users/{id}'
    });
};

/**
 * Update a tenant user
 */
export const updateTenantUser = <ThrowOnError extends boolean = false>(options: Options<UpdateTenantUserData, ThrowOnError>) => {
    return (options?.client ?? client).put<UpdateTenantUserResponse, unknown, ThrowOnError>({
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        },
        url: '/auth/tenant-users/{id}'
    });
};

/**
 * Clear all sandbox data for the authenticated tenant user
 */
export const clearSandbox = <ThrowOnError extends boolean = false>(options?: Options<ClearSandboxData, ThrowOnError>) => {
    return (options?.client ?? client).post<unknown, unknown, ThrowOnError>({
        ...options,
        url: '/sandbox/clear'
    });
};

/**
 * Get Custody Commissions
 * Get many custody commissions
 */
export const getCustodyCommissions = <ThrowOnError extends boolean = false>(options?: Options<GetCustodyCommissionsData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetCustodyCommissionsResponse, unknown, ThrowOnError>({
        ...options,
        url: '/custody-commissions'
    });
};

/**
 * Create Custody Commission
 * Create a custody commission
 */
export const createCustodyCommission = <ThrowOnError extends boolean = false>(options: Options<CreateCustodyCommissionData, ThrowOnError>) => {
    return (options?.client ?? client).post<CreateCustodyCommissionResponse, unknown, ThrowOnError>({
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        },
        url: '/custody-commissions'
    });
};

/**
 * Delete Custody Commission
 * Delete a custody commission
 */
export const deleteCustodyCommission = <ThrowOnError extends boolean = false>(options: Options<DeleteCustodyCommissionData, ThrowOnError>) => {
    return (options?.client ?? client).delete<DeleteCustodyCommissionResponse, unknown, ThrowOnError>({
        ...options,
        url: '/custody-commissions/{id}'
    });
};

/**
 * Get Custody Commission
 * Get a custody commission
 */
export const getCustodyCommission = <ThrowOnError extends boolean = false>(options: Options<GetCustodyCommissionData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetCustodyCommissionResponse, unknown, ThrowOnError>({
        ...options,
        url: '/custody-commissions/{id}'
    });
};

/**
 * Update Custody Commission
 * Update a custody commission
 */
export const updateCustodyCommission = <ThrowOnError extends boolean = false>(options: Options<UpdateCustodyCommissionData, ThrowOnError>) => {
    return (options?.client ?? client).put<UpdateCustodyCommissionResponse, unknown, ThrowOnError>({
        ...options,
        url: '/custody-commissions/{id}'
    });
};

/**
 * Consume Custody Commission
 * Consume a custody commission
 */
export const consumeCustodyCommission = <ThrowOnError extends boolean = false>(options: Options<ConsumeCustodyCommissionData, ThrowOnError>) => {
    return (options?.client ?? client).post<ConsumeCustodyCommissionResponse, unknown, ThrowOnError>({
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        },
        url: '/custody-commissions/consume'
    });
};

/**
 * Get DIDs
 * Get all DIDs for the requested organization.
 */
export const getDids = <ThrowOnError extends boolean = false>(options?: Options<GetDidsData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetDidsResponse, unknown, ThrowOnError>({
        ...options,
        url: '/did'
    });
};

/**
 * Create DID
 * Create a unique DID for the requested organization.
 */
export const createDid = <ThrowOnError extends boolean = false>(options: Options<CreateDidData, ThrowOnError>) => {
    return (options?.client ?? client).post<CreateDidResponse, unknown, ThrowOnError>({
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        },
        url: '/did'
    });
};

/**
 * Delete DID
 * Delete a DID by ID
 */
export const deleteDid = <ThrowOnError extends boolean = false>(options: Options<DeleteDidData, ThrowOnError>) => {
    return (options?.client ?? client).delete<DeleteDidResponse, unknown, ThrowOnError>({
        ...options,
        url: '/did/{id}'
    });
};

/**
 * Get DID
 * Get a DID by ID
 */
export const getDid = <ThrowOnError extends boolean = false>(options: Options<GetDidData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetDidResponse, unknown, ThrowOnError>({
        ...options,
        url: '/did/{id}'
    });
};

/**
 * Create a DPP
 * Create a DPP
 */
export const createDpp = <ThrowOnError extends boolean = false>(options: Options<CreateDppData, ThrowOnError>) => {
    return (options?.client ?? client).post<CreateDppResponse, unknown, ThrowOnError>({
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        },
        url: '/dpp'
    });
};

/**
 * Delete a DPP
 * Delete a DPP
 */
export const deleteDpp = <ThrowOnError extends boolean = false>(options: Options<DeleteDppData, ThrowOnError>) => {
    return (options?.client ?? client).delete<unknown, unknown, ThrowOnError>({
        ...options,
        url: '/dpp/{id}'
    });
};

/**
 * Get a DPP
 * Get a DPP
 */
export const getDpp = <ThrowOnError extends boolean = false>(options: Options<GetDppData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetDppResponse, unknown, ThrowOnError>({
        ...options,
        url: '/dpp/{id}'
    });
};

/**
 * Get Event Tags
 * Get event tags
 */
export const getEventTags = <ThrowOnError extends boolean = false>(options?: Options<GetEventTagsData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetEventTagsResponse, unknown, ThrowOnError>({
        ...options,
        url: '/event-tags'
    });
};

/**
 * Create an event tag
 */
export const createEventTag = <ThrowOnError extends boolean = false>(options: Options<CreateEventTagData, ThrowOnError>) => {
    return (options?.client ?? client).post<CreateEventTagResponse, unknown, ThrowOnError>({
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        },
        url: '/event-tags'
    });
};

/**
 * Set tags for an event
 */
export const setEventTags = <ThrowOnError extends boolean = false>(options: Options<SetEventTagsData, ThrowOnError>) => {
    return (options?.client ?? client).post<SetEventTagsResponse, unknown, ThrowOnError>({
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        },
        url: '/event-tags/set'
    });
};

/**
 * Delete an event tag
 */
export const deleteEventTag = <ThrowOnError extends boolean = false>(options: Options<DeleteEventTagData, ThrowOnError>) => {
    return (options?.client ?? client).delete<unknown, unknown, ThrowOnError>({
        ...options,
        url: '/event-tags/{id}'
    });
};

/**
 * Get an event tag
 */
export const getEventTag = <ThrowOnError extends boolean = false>(options: Options<GetEventTagData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetEventTagResponse, unknown, ThrowOnError>({
        ...options,
        url: '/event-tags/{id}'
    });
};

/**
 * Get Events
 * Get many events
 */
export const getEvents = <ThrowOnError extends boolean = false>(options?: Options<GetEventsData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetEventsResponse, unknown, ThrowOnError>({
        ...options,
        url: '/events'
    });
};

/**
 * Create Event
 * Create an event
 */
export const createEvent = <ThrowOnError extends boolean = false>(options: Options<CreateEventData, ThrowOnError>) => {
    return (options?.client ?? client).post<CreateEventResponse, unknown, ThrowOnError>({
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        },
        url: '/events'
    });
};

/**
 * Delete Event
 * Delete an event
 */
export const deleteEvent = <ThrowOnError extends boolean = false>(options: Options<DeleteEventData, ThrowOnError>) => {
    return (options?.client ?? client).delete<unknown, unknown, ThrowOnError>({
        ...options,
        url: '/events/{id}'
    });
};

/**
 * Get Event
 * Get an event
 */
export const getEvent = <ThrowOnError extends boolean = false>(options: Options<GetEventData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetEventResponse, unknown, ThrowOnError>({
        ...options,
        url: '/events/{id}'
    });
};

export const getManyExternalResolvers = <ThrowOnError extends boolean = false>(options?: Options<GetManyExternalResolversData, ThrowOnError>) => {
    return (options?.client ?? client).get<unknown, unknown, ThrowOnError>({
        ...options,
        url: '/external-resolvers'
    });
};

/**
 * Create External Resolver
 */
export const createExternalResolver = <ThrowOnError extends boolean = false>(options: Options<CreateExternalResolverData, ThrowOnError>) => {
    return (options?.client ?? client).post<unknown, unknown, ThrowOnError>({
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        },
        url: '/external-resolvers'
    });
};

/**
 * Delete External Resolver
 */
export const deleteExternalResolver = <ThrowOnError extends boolean = false>(options: Options<DeleteExternalResolverData, ThrowOnError>) => {
    return (options?.client ?? client).delete<unknown, unknown, ThrowOnError>({
        ...options,
        url: '/external-resolvers/{id}'
    });
};

/**
 * Get External Resolver
 */
export const getExternalResolver = <ThrowOnError extends boolean = false>(options: Options<GetExternalResolverData, ThrowOnError>) => {
    return (options?.client ?? client).get<unknown, unknown, ThrowOnError>({
        ...options,
        url: '/external-resolvers/{id}'
    });
};

/**
 * Update External Resolver
 */
export const updateExternalResolver = <ThrowOnError extends boolean = false>(options: Options<UpdateExternalResolverData, ThrowOnError>) => {
    return (options?.client ?? client).put<unknown, unknown, ThrowOnError>({
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        },
        url: '/external-resolvers/{id}'
    });
};

/**
 * Get Locations
 * Get many locations
 */
export const getLocations = <ThrowOnError extends boolean = false>(options?: Options<GetLocationsData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetLocationsResponse, unknown, ThrowOnError>({
        ...options,
        url: '/locations'
    });
};

/**
 * Create Location
 * Create a location
 */
export const createLocation = <ThrowOnError extends boolean = false>(options: Options<CreateLocationData, ThrowOnError>) => {
    return (options?.client ?? client).post<CreateLocationResponse, unknown, ThrowOnError>({
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        },
        url: '/locations'
    });
};

/**
 * Get Location
 * Get a location
 */
export const getLocation = <ThrowOnError extends boolean = false>(options: Options<GetLocationData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetLocationResponse, unknown, ThrowOnError>({
        ...options,
        url: '/locations/{id}'
    });
};

/**
 * Get Trade Items
 * Get many trade items
 */
export const getTradeItems = <ThrowOnError extends boolean = false>(options?: Options<GetTradeItemsData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetTradeItemsResponse, unknown, ThrowOnError>({
        ...options,
        url: '/trade-items'
    });
};

/**
 * Create Trade Item
 * Create a trade item
 */
export const createTradeItem = <ThrowOnError extends boolean = false>(options: Options<CreateTradeItemData, ThrowOnError>) => {
    return (options?.client ?? client).post<CreateTradeItemResponse, unknown, ThrowOnError>({
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        },
        url: '/trade-items'
    });
};

/**
 * Delete Trade Item
 * Delete a trade item
 */
export const deleteTradeItem = <ThrowOnError extends boolean = false>(options: Options<DeleteTradeItemData, ThrowOnError>) => {
    return (options?.client ?? client).delete<unknown, unknown, ThrowOnError>({
        ...options,
        url: '/trade-items/{id}'
    });
};

/**
 * Get Trade Item
 * Get a trade item
 */
export const getTradeItem = <ThrowOnError extends boolean = false>(options: Options<GetTradeItemData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetTradeItemResponse, unknown, ThrowOnError>({
        ...options,
        url: '/trade-items/{id}'
    });
};

/**
 * Get Trade Item by Identifier
 * Get a trade item by its identifier
 */
export const getTradeItemByIdentifier = <ThrowOnError extends boolean = false>(options: Options<GetTradeItemByIdentifierData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetTradeItemByIdentifierResponse, unknown, ThrowOnError>({
        ...options,
        url: '/trade-items/by-identifier/{identifier}'
    });
};

/**
 * Create an organization
 */
export const createOrganization = <ThrowOnError extends boolean = false>(options: Options<CreateOrganizationData, ThrowOnError>) => {
    return (options?.client ?? client).post<CreateOrganizationResponse, unknown, ThrowOnError>({
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        },
        url: '/organizations'
    });
};

/**
 * Delete an organization
 */
export const deleteOrganization = <ThrowOnError extends boolean = false>(options: Options<DeleteOrganizationData, ThrowOnError>) => {
    return (options?.client ?? client).delete<unknown, unknown, ThrowOnError>({
        ...options,
        url: '/organizations/{id}'
    });
};

/**
 * Get an organization
 */
export const getOrganization = <ThrowOnError extends boolean = false>(options: Options<GetOrganizationData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetOrganizationResponse, unknown, ThrowOnError>({
        ...options,
        url: '/organizations/{id}'
    });
};

/**
 * Update an organization
 */
export const updateOrganization = <ThrowOnError extends boolean = false>(options: Options<UpdateOrganizationData, ThrowOnError>) => {
    return (options?.client ?? client).put<UpdateOrganizationResponse, unknown, ThrowOnError>({
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        },
        url: '/organizations/{id}'
    });
};

/**
 * Create a schema
 */
export const createSchema = <ThrowOnError extends boolean = false>(options: Options<CreateSchemaData, ThrowOnError>) => {
    return (options?.client ?? client).post<CreateSchemaResponse, unknown, ThrowOnError>({
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        },
        url: '/schemas'
    });
};

/**
 * Delete a schema
 */
export const deleteSchema = <ThrowOnError extends boolean = false>(options: Options<DeleteSchemaData, ThrowOnError>) => {
    return (options?.client ?? client).delete<unknown, unknown, ThrowOnError>({
        ...options,
        url: '/schemas/{id}'
    });
};

/**
 * Get a schema
 */
export const getSchema = <ThrowOnError extends boolean = false>(options: Options<GetSchemaData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetSchemaResponse, unknown, ThrowOnError>({
        ...options,
        url: '/schemas/{id}'
    });
};

/**
 * Update a schema
 */
export const updateSchema = <ThrowOnError extends boolean = false>(options: Options<UpdateSchemaData, ThrowOnError>) => {
    return (options?.client ?? client).put<UpdateSchemaResponse, unknown, ThrowOnError>({
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        },
        url: '/schemas/{id}'
    });
};

/**
 * Get a trust graph by id
 * Get a trust graph by id
 */
export const getTrustGraph = <ThrowOnError extends boolean = false>(options: Options<GetTrustGraphData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetTrustGraphResponse, unknown, ThrowOnError>({
        ...options,
        url: '/discovery/trust-graph/{id}'
    });
};

/**
 * Traverse a trust graph
 * Traverse a trust graph
 */
export const traverseTrustGraph = <ThrowOnError extends boolean = false>(options: Options<TraverseTrustGraphData, ThrowOnError>) => {
    return (options?.client ?? client).post<TraverseTrustGraphResponse, unknown, ThrowOnError>({
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        },
        url: '/discovery/trust-graph/traverse'
    });
};