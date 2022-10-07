import { formValues } from "redux-form";
import data from "../apis/local";
import history from "../history";

import {
  SIGN_IN,
  SIGN_OUT,
  SIGN_UP,
  CREATE_CATEGORY,
  FETCH_CATEGORIES,
  FETCH_CATEGORY,
  DELETE_CATEGORY,
  EDIT_CATEGORY,
  CREATE_USER,
  FETCH_USERS,
  FETCH_USER,
  DELETE_USER,
  EDIT_USER,
  CREATE_CITY,
  FETCH_CITIES,
  FETCH_CITY,
  DELETE_CITY,
  EDIT_CITY,
  CREATE_VENDOR,
  FETCH_VENDORS,
  FETCH_VENDOR,
  DELETE_VENDOR,
  EDIT_VENDOR,
  CREATE_PRODUCT,
  FETCH_PRODUCTS,
  FETCH_PRODUCT,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
  CREATE_POLICY,
  FETCH_POLICIES,
  FETCH_POLICY,
  DELETE_POLICY,
  EDIT_POLICY,
  CREATE_COUNTRY,
  FETCH_COUNTRIES,
  FETCH_COUNTRY,
  DELETE_COUNTRY,
  EDIT_COUNTRY,
  CREATE_STATE,
  FETCH_STATES,
  FETCH_STATE,
  DELETE_STATE,
  EDIT_STATE,
  CREATE_CURRENCY,
  FETCH_CURRENCIES,
  FETCH_CURRENCY,
  DELETE_CURRENCY,
  EDIT_CURRENCY,
  CREATE_SCHEMECODE,
  FETCH_SCHEMECODES,
  FETCH_SCHEMECODE,
  DELETE_SCHEMECODE,
  CREATE_GLCODE,
  FETCH_GLCODES,
  FETCH_GLCODE,
  DELETE_GLCODE,
  EDIT_GLCODE,
  CREATE_SUBGLCODE,
  FETCH_SUBGLCODES,
  FETCH_SUBGLCODE,
  DELETE_SUBGLCODE,
  EDIT_GLSUBCODE,
  CREATE_TRANSTYPE,
  FETCH_TRANSTYPES,
  FETCH_TRANSTYPE,
  DELETE_TRANSTYPE,
  EDIT_TRANSTYPE,
  CREATE_SERVICEOUTLET,
  FETCH_SERVICEOUTLETS,
  FETCH_SERVICEOUTLET,
  DELETE_SERVICEOUTLET,
  EDIT_SERVICEOUTLET,
  CREATE_LOCATION,
  FETCH_LOCATIONS,
  FETCH_LOCATION,
  //EDIT_LOCATION,
  DELETE_LOCATION,
  EDIT_LOCATION_SUCCEEDED,
  EDIT_LOCATION_FAILED,
  CREATE_HOSERVICEOUTLET,
  FETCH_HOSERVICEOUTLETS,
  FETCH_HOSERVICEOUTLET,
  DELETE_HOSERVICEOUTLET,
  EDIT_HOSERVICEOUTLET,
  EDIT_SCHEMECODE,
  CREATE_OFFICEOPERATION,
  FETCH_OFFICEOPERATIONS,
  FETCH_OFFICEOPERATION,
  EDIT_OFFICEOPERATION,
  DELETE_OFFICEOPERATION,
  CREATE_STORETYPE,
  FETCH_STORETYPES,
  FETCH_STORETYPE,
  DELETE_STORETYPE,
  EDIT_STORETYPE,
  CREATE_SUBCLASS,
  FETCH_SUBCLASSES,
  FETCH_SUBCLASS,
  DELETE_SUBCLASS,
  EDIT_SUBCLASS,
  CREATE_ASSETTYPE,
  FETCH_ASSETTYPES,
  FETCH_ASSETTYPE,
  DELETE_ASSETTYPE,
  EDIT_ASSETTYPE,
  CREATE_DEPRECIATIONTYPE,
  FETCH_DEPRECIATIONTYPES,
  FETCH_DEPRECIATIONTYPE,
  DELETE_DEPRECIATIONTYPE,
  EDIT_DEPRECIATIONTYPE,
  CREATE_MAINTENANCETYPE,
  FETCH_MAINTENANCETYPES,
  FETCH_MAINTENANCETYPE,
  DELETE_MAINTENANCETYPE,
  EDIT_MAINTENANCETYPE,
  CREATE_MEASUREMENTUNIT,
  FETCH_MEASUREMENTUNITS,
  FETCH_MEASUREMENTUNIT,
  DELETE_MEASUREMENTUNIT,
  EDIT_MEASUREMENTUNIT,
  CREATE_STOCK,
  FETCH_STOCKS,
  FETCH_STOCK,
  DELETE_STOCK,
  EDIT_STOCK,
  CREATE_OTHERASSET,
  FETCH_OTHERASSETS,
  FETCH_OTHERASSET,
  DELETE_OTHERASSET,
  EDIT_OTHERASSET,
  CREATE_ASSETPROCUREMENT,
  FETCH_ASSETPROCUREMENTS,
  FETCH_ASSETPROCUREMENT,
  DELETE_ASSETPROCUREMENT,
  EDIT_ASSETPROCUREMENT,
  CREATE_APPROVEDPROCUREMENT,
  FETCH_APPROVEDPROCUREMENTS,
  FETCH_APPROVEDPROCUREMENT,
  DELETE_APPROVEDPROCUREMENT,
  EDIT_APPROVEDPROCUREMENT,
  CREATE_UNAPPROVEDPROCUREMENT,
  FETCH_UNAPPROVEDPROCUREMENTS,
  FETCH_UNAPPROVEDPROCUREMENT,
  DELETE_UNAPPROVEDPROCUREMENT,
  EDIT_UNAPPROVEDPROCUREMENT,
  CREATE_UNAPPROVEDMAINTENANCE,
  FETCH_UNAPPROVEDMAINTENANCES,
  FETCH_UNAPPROVEDMAINTENANCE,
  DELETE_UNAPPROVEDMAINTENANCE,
  EDIT_UNAPPROVEDMAINTENANCE,
  CREATE_APPROVEDMAINTENANCE,
  FETCH_APPROVEDMAINTENANCES,
  FETCH_APPROVEDMAINTENANCE,
  DELETE_APPROVEDMAINTENANCE,
  EDIT_APPROVEDMAINTENANCE,
  CREATE_EXECUTEDMAINTENANCE,
  FETCH_EXECUTEDMAINTENANCES,
  FETCH_EXECUTEDMAINTENANCE,
  DELETE_EXECUTEDMAINTENANCE,
  EDIT_EXECUTEDMAINTENANCE,
  MAKE_INVENTORYREQUISITIONREQUEST,
  MAKE_INVENTORYRETIREMENTREQUEST,
  MAKE_INVENTORYDISPOSALREQUEST,
  MAKE_INVENTORYTRANSFERREQUEST,
  FETCH_INVENTORYSTOCKS,
  FETCH_INVENTORYSTOCK,
  DELETE_INVENTORYSTOCK,
  EDIT_INVENTORYSTOCK,
  FETCH_UNAPPROVEDSTOCKREQUISITIONS,
  FETCH_UNAPPROVEDSTOCKREQUISITION,
  DELETE_UNAPPROVEDSTOCKREQUISITION,
  EDIT_UNAPPROVEDSTOCKREQUISITION,
  FETCH_UNAPPROVEDSTOCKRETIREMENTS,
  FETCH_UNAPPROVEDSTOCKRETIREMENT,
  DELETE_UNAPPROVEDSTOCKRETIREMENT,
  EDIT_UNAPPROVEDSTOCKRETIREMENT,
  FETCH_UNAPPROVEDSTOCKDISPOSITIONS,
  FETCH_UNAPPROVEDSTOCKDISPOSITION,
  DELETE_UNAPPROVEDSTOCKDISPOSITION,
  EDIT_UNAPPROVEDSTOCKDISPOSITION,
  FETCH_UNAPPROVEDSTOCKTRANSFERS,
  FETCH_UNAPPROVEDSTOCKTRANSFER,
  DELETE_UNAPPROVEDSTOCKTRANSFER,
  EDIT_UNAPPROVEDSTOCKTRANSFER,
  CREATE_ASSETREQUISITION,
  FETCH_ASSETREQUISITIONS,
  FETCH_ASSETREQUISITION,
  DELETE_ASSETREQUISITION,
  EDIT_ASSETREQUISITION,
  FETCH_PENDINGASSETREQUISITIONS,
  FETCH_PENDINGASSETREQUISITION,
  DELETE_PENDINGASSETREQUISITION,
  EDIT_PENDINGASSETREQUISITION,
  FETCH_WITHDRAWNASSETREQUISITIONS,
  FETCH_WITHDRAWNASSETREQUISITION,
  DELETE_WITHDRAWNASSETREQUISITION,
  EDIT_WITHDRAWNASSETREQUISITION,
  FETCH_ABORTEDASSETREQUISITIONS,
  FETCH_ABORTEDASSETREQUISITION,
  DELETE_ABORTEDASSETREQUISITION,
  EDIT_ABORTEDASSETREQUISITION,
  FETCH_RETURNASSETPOSTREQUISITIONS,
  FETCH_RETURNASSETPOSTREQUISITION,
  EDIT_RETURNASSETPOSTREQUISITION,
  DELETE_RETURNASSETPOSTREQUISITION,
  CREATE_ASSETRETIREMENT,
  FETCH_ASSETRETIREMENTS,
  FETCH_ASSETRETIREMENT,
  EDIT_ASSETRETIREMENT,
  DELETE_ASSETRETIREMENT,
  FETCH_PENDINGASSETRETIREMENTS,
  FETCH_PENDINGASSETRETIREMENT,
  EDIT_PENDINGASSETRETIREMENT,
  DELETE_PENDINGASSETRETIREMENT,
  FETCH_WITHDRAWNASSETRETIREMENTS,
  FETCH_WITHDRAWNASSETRETIREMENT,
  EDIT_WITHDRAWNASSETRETIREMENT,
  DELETE_WITHDRAWNASSETRETIREMENT,
  FETCH_RETURNPOSTASSETRETIREMENTS,
  FETCH_RETURNPOSTASSETRETIREMENT,
  EDIT_RETURNPOSTASSETRETIREMENT,
  DELETE_RETURNPOSTASSETRETIREMENT,
  CREATE_ASSETDISPOSITION,
  FETCH_ASSETDISPOSITIONS,
  FETCH_ASSETDISPOSITION,
  EDIT_ASSETDISPOSITION,
  DELETE_ASSETDISPOSITION,
  FETCH_PENDINGASSETDISPOSITIONS,
  FETCH_PENDINGASSETDISPOSITION,
  EDIT_PENDINGASSETDISPOSITION,
  DELETE_PENDINGASSETDISPOSITION,
  FETCH_WITHDRAWNASSETDISPOSITIONS,
  FETCH_WITHDRAWNASSETDISPOSITION,
  EDIT_WITHDRAWNASSETDISPOSITION,
  DELETE_WITHDRAWNASSETDISPOSITION,
  FETCH_RETURNASSETPOSTDISPOSITIONS,
  FETCH_RETURNASSETPOSTDISPOSITION,
  EDIT_RETURNASSETPOSTDISPOSITION,
  DELETE_RETURNASSETPOSTDISPOSITION,
  CREATE_ASSETMOVEMENT,
  FETCH_ASSETMOVEMENTS,
  FETCH_ASSETMOVEMENT,
  EDIT_ASSETMOVEMENT,
  DELETE_ASSETMOVEMENT,
  CREATE_TRANSFERASSETMOVEMENT,
  FETCH_TRANSFERASSETMOVEMENTS,
  FETCH_TRANSFERASSETMOVEMENT,
  EDIT_TRANSFERASSETMOVEMENT,
  DELETE_TRANSFERASSETMOVEMENT,
  CREATE_PENDINGTRANSFERASSETMOVEMENT,
  FETCH_PENDINGTRANSFERASSETMOVEMENTS,
  FETCH_PENDINGTRANSFERASSETMOVEMENT,
  EDIT_PENDINGTRANSFERASSETMOVEMENT,
  DELETE_PENDINGTRANSFERASSETMOVEMENT,
  CREATE_WITHDRAWNTRANSFERASSETMOVEMENT,
  FETCH_WITHDRAWNTRANSFERASSETMOVEMENTS,
  FETCH_WITHDRAWNTRANSFERASSETMOVEMENT,
  EDIT_WITHDRAWNTRANSFERASSETMOVEMENT,
  DELETE_WITHDRAWNTRANSFERASSETMOVEMENT,
  CREATE_RETURNASSETPOSTTRANSFERMOVEMENT,
  FETCH_RETURNASSETPOSTTRANSFERMOVEMENTS,
  FETCH_RETURNASSETPOSTTRANSFERMOVEMENT,
  EDIT_RETURNASSETPOSTTRANSERMOVEMENT,
  DELETE_RETURNASSETPOSTTRANSFERMOVEMENT,
  CREATE_ASSETSTORE,
  FETCH_ASSETSTORES,
  FETCH_ASSETSTORE,
  EDIT_ASSETSTORE,
  DELETE_ASSETSTORE,
  CREATE_MAINTENANCEASSETSTORE,
  FETCH_MAINTENANCEASSETSTORES,
  FETCH_MAINTENANCEASSETSTORE,
  EDIT_MAINTENANCEASSETSTORE,
  DELETE_MAINTENANCEASSETSTORE,
  CREATE_LEASEASSETSTORE,
  FETCH_LEASEASSETSTORES,
  FETCH_LEASEASSETSTORE,
  EDIT_LEASEASSETSTORE,
  DELETE_LEASEASSETSTORE,
  CREATE_OWNERSHIPASSETSTORE,
  FETCH_OWNERSHIPASSETSTORES,
  FETCH_OWNERSHIPASSETSTORE,
  EDIT_OWNERSHIPASSETSTORE,
  DELETE_OWNERSHIPASSETSTORE,
  CREATE_ASSETSTORESPACEALLOCATION,
  FETCH_ASSETSTORESPACEALLOCATIONS,
  FETCH_ASSETSTORESPACEALLOCATION,
  EDIT_ASSETSTORESPACEALLOCATION,
  DELETE_ASSETSTORESPACEALLOCATION,
  CREATE_SELLASSETSTORE,
  FETCH_SELLASSETSTORES,
  FETCH_SELLASSETSTORE,
  EDIT_SELLASSETSTORE,
  DELETE_SELLASSETSTORE,
  CREATE_ASSETSTORECLOSURE,
  FETCH_ASSETSTORECLOSURES,
  FETCH_ASSETSTORECLOSURE,
  EDIT_ASSETSTORECLOSURE,
  DELETE_ASSETSTORECLOSURE,
  CREATE_STOREMOVEMENTTYPE,
  FETCH_STOREMOVEMENTTYPES,
  FETCH_STOREMOVEMENTTYPE,
  EDIT_STOREMOVEMENTTYPE,
  DELETE_STOREMOVEMENTTYPE,
  CREATE_STOREDISPOSITIONTYPE,
  FETCH_STOREDISPOSITIONTYPES,
  FETCH_STOREDISPOSITIONTYPE,
  EDIT_STOREDISPOSITIONTYPE,
  DELETE_STOREDISPOSITIONTYPE,
  CREATE_STOREMAINTENANCETYPE,
  FETCH_STOREMAINTENANCETYPES,
  FETCH_STOREMAINTENANCETYPE,
  EDIT_STOREMAINTENANCETYPE,
  DELETE_STOREMAINTENANCETYPE,
  CREATE_TRANSFORMATIONTYPE,
  FETCH_TRANSFORMATIONTYPES,
  FETCH_TRANSFORMATIONTYPE,
  EDIT_TRANSFORMATIONTYPE,
  DELETE_TRANSFORMATIONTYPE,
  CREATE_TRANSFORMATIONPHASE,
  FETCH_TRANSFORMATIONPHASES,
  FETCH_TRANSFORMATIONPHASE,
  EDIT_TRANSFORMATIONPHASE,
  DELETE_TRANSFORMATIONPHASE,
  CREATE_TRANSFORMATIONPHASEEVENT,
  FETCH_TRANSFORMATIONPHASEEVENTS,
  FETCH_TRANSFORMATIONPHASEEVENT,
  EDIT_TRANSFORMATIONPHASEEVENT,
  DELETE_TRANSFORMATIONPHASEEVENT,
  CREATE_FINISHINGTYPE,
  FETCH_FINISHINGTYPES,
  FETCH_FINISHINGTYPE,
  EDIT_FINISHINGTYPE,
  DELETE_FINISHINGTYPE,
  CREATE_QUALITYASSURANCETYPE,
  FETCH_QUALITYASSURANCETYPES,
  FETCH_QUALITYASSURANCETYPE,
  EDIT_QUALITYASSURANCETYPE,
  DELETE_QUALITYASSURANCETYPE,
  CREATE_QUALITYASSURANCEPHASE,
  FETCH_QUALITYASSURANCEPHASES,
  FETCH_QUALITYASSURANCEPHASE,
  EDIT_QUALITYASSURANCEPHASE,
  DELETE_QUALITYASSURANCEPHASE,
  CREATE_QUALITYASSURANCEPHASEEVENT,
  FETCH_QUALITYASSURANCEPHASEEVENTS,
  FETCH_QUALITYASSURANCEPHASEEVENT,
  EDIT_QUALITYASSURANCEPHASEEVENT,
  DELETE_QUALITYASSURANCEPHASEEVENT,
  CREATE_OPERATIONMAINTENANCETYPE,
  FETCH_OPERATIONMAINTENANCETYPES,
  FETCH_OPERATIONMAINTENANCETYPE,
  EDIT_OPERATIONMAINTENANCETYPE,
  DELETE_OPERATIONMAINTENANCETYPE,
  CREATE_FINISHING,
  FETCH_FINISHINGS,
  FETCH_FINISHING,
  EDIT_FINISHING,
  DELETE_FINISHING,
  CREATE_QUALITYASSURANCE,
  FETCH_QUALITYASSURANCES,
  FETCH_QUALITYASSURANCE,
  EDIT_QUALITYASSURANCE,
  DELETE_QUALITYASSURANCE,
  CREATE_OPERATIONMAINTENANCE,
  FETCH_OPERATIONMAINTENANCES,
  FETCH_OPERATIONMAINTENANCE,
  EDIT_OPERATIONMAINTENANCE,
  DELETE_OPERATIONMAINTENANCE,
  CREATE_OPERATIONPROCESSING,
  FETCH_OPERATIONPROCESSINGS,
  FETCH_OPERATIONPROCESSING,
  EDIT_OPERATIONPROCESSING,
  DELETE_OPERATIONPROCESSING,
  CREATE_OPERATIONOPERATION,
  FETCH_OPERATIONOPERATIONS,
  FETCH_OPERATIONOPERATION,
  EDIT_OPERATIONOPERATION,
  DELETE_OPERATIONOPERATION,
  CREATE_OPERATIONPRODUCTIONMAINTENANCE,
  FETCH_OPERATIONPRODUCTIONMAINTENANCES,
  FETCH_OPERATIONPRODUCTIONMAINTENANCE,
  EDIT_OPERATIONPRODUCTIONMAINTENANCE,
  DELETE_OPERATIONPRODUCTIONMAINTENANCE,
  CREATE_PRODUCTIONQUALITYASSURANCE,
  FETCH_PRODUCTIONQUALITYASSURANCES,
  FETCH_PRODUCTIONQUALITYASSURANCE,
  EDIT_PRODUCTIONQUALITYASSURANCE,
  DELETE_PRODUCTIONQUALITYASSURANCE,
  CREATE_PRODUCTIONFINISHING,
  FETCH_PRODUCTIONFINISHINGS,
  FETCH_PRODUCTIONFINISHING,
  EDIT_PRODUCTIONFINISHING,
  DELETE_PRODUCTIONFINISHING,
  CREATE_PROJECTPROJECT,
  FETCH_PROJECTPROJECTS,
  FETCH_PROJECTPROJECT,
  EDIT_PROJECTPROJECT,
  DELETE_PROJECTPROJECT,
  CREATE_PROJECTPROJECTRESOURCE,
  FETCH_PROJECTPROJECTRESOURCES,
  FETCH_PROJECTPROJECTRESOURCE,
  EDIT_PROJECTPROJECTRESOURCE,
  DELETE_PROJECTPROJECTRESOURCE,
  CREATE_PROJECTPROJECTBUDGETING,
  FETCH_PROJECTPROJECTBUDGETINGS,
  FETCH_PROJECTPROJECTBUDGETING,
  EDIT_PROJECTPROJECTBUDGETING,
  DELETE_PROJECTPROJECTBUDGETING,
  CREATE_PROJECTPLANNINGTASK,
  FETCH_PROJECTPLANNINGTASKS,
  FETCH_PROJECTPLANNINGTASK,
  EDIT_PROJECTPLANNINGTASK,
  DELETE_PROJECTPLANNINGTASK,
  CREATE_PROJECTPLANNINGACTIVITY,
  FETCH_PROJECTPLANNINGACTIVITIES,
  FETCH_PROJECTPLANNINGACTIVITY,
  EDIT_PROJECTPLANNINGACTIVITY,
  DELETE_PROJECTPLANNINGACTIVITY,
  CREATE_PROJECTPLANNINGSCHEDULING,
  FETCH_PROJECTPLANNINGSCHEDULINGS,
  FETCH_PROJECTPLANNINGSCHEDULING,
  EDIT_PROJECTPLANNINGSCHEDULING,
  DELETE_PROJECTPLANNINGSCHEDULING,
  CREATE_PROJECTEXECUTIONACTIVITY,
  FETCH_PROJECTEXECUTIONACTIVITIES,
  FETCH_PROJECTEXECUTIONACTIVITY,
  EDIT_PROJECTEXECUTIONACTIVITY,
  DELETE_PROJECTEXECUTIONACTIVITY,
  CREATE_PROJECTPLANNINGSTEP,
  FETCH_PROJECTPLANNINGSTEPS,
  FETCH_PROJECTPLANNINGSTEP,
  EDIT_PROJECTPLANNINGSTEP,
  DELETE_PROJECTPLANNINGSTEP,
  CREATE_PROJECTPLANNINGSEQUENCING,
  FETCH_PROJECTPLANNINGSEQUENCINGS,
  FETCH_PROJECTPLANNINGSEQUENCING,
  EDIT_PROJECTPLANNINGSEQUENCING,
  DELETE_PROJECTPLANNINGSEQUENCING,
  CREATE_PROJECTMONITORINGTASK,
  FETCH_PROJECTMONITORINGTASKS,
  FETCH_PROJECTMONITORINGTASK,
  EDIT_PROJECTMONITORINGTASK,
  DELETE_PROJECTMONITORINGTASK,
  CREATE_PROJECTCLOSURE,
  FETCH_PROJECTCLOSURES,
  FETCH_PROJECTCLOSURE,
  EDIT_PROJECTCLOSURE,
  DELETE_PROJECTCLOSURE,
  CREATE_PROJECTMONITORINGACTIVITY,
  FETCH_PROJECTMONITORINGACTIVITIES,
  FETCH_PROJECTMONITORINGACTIVITY,
  EDIT_PROJECTMONITORINGACTIVITY,
  DELETE_PROJECTMONITORINGACTIVITY,
  CREATE_CONTACT,
  FETCH_CONTACTS,
  FETCH_CONTACT,
  EDIT_CONTACT,
  DELETE_CONTACT,
  CREATE_CUSTOMER,
  FETCH_CUSTOMERS,
  FETCH_CUSTOMER,
  EDIT_CUSTOMER,
  DELETE_CUSTOMER,
  CREATE_PARTNER,
  FETCH_PARTNERS,
  FETCH_PARTNER,
  EDIT_PARTNER,
  DELETE_PARTNER,
  CREATE_SUPPLIER,
  FETCH_SUPPLIERS,
  FETCH_SUPPLIER,
  EDIT_SUPPLIER,
  DELETE_SUPPLIER,
  CREATE_SALESPRODUCT,
  FETCH_SALESPRODUCTS,
  FETCH_SALESPRODUCT,
  EDIT_SALESPRODUCT,
  DELETE_SALESPRODUCT,
  CREATE_SALESTEAM,
  FETCH_SALESTEAMS,
  FETCH_SALESTEAM,
  EDIT_SALESTEAM,
  DELETE_SALESTEAM,
  CREATE_SALESTEAMMEMBER,
  FETCH_SALESTEAMMEMBERS,
  FETCH_SALESTEAMMEMBER,
  EDIT_SALESTEAMMEMBER,
  DELETE_SALESTEAMMEMBER,
  CREATE_SALESTASK,
  FETCH_SALESTASKS,
  FETCH_SALESTASK,
  EDIT_SALESTASK,
  DELETE_SALESTASK,
  CREATE_SALESSALE,
  FETCH_SALESSALES,
  FETCH_SALESSALE,
  EDIT_SALESSALE,
  DELETE_SALESSALE,
  CREATE_SALESINVOICE,
  FETCH_SALESINVOICES,
  FETCH_SALESINVOICE,
  EDIT_SALESINVOICE,
  DELETE_SALESINVOICE,
  CREATE_SALESACCOUNT,
  FETCH_SALESACCOUNTS,
  FETCH_SALESACCOUNT,
  EDIT_SALESACCOUNT,
  DELETE_SALESACCOUNT,
  CREATE_HRUNIT,
  FETCH_HRUNITS,
  FETCH_HRUNIT,
  EDIT_HRUNIT,
  DELETE_HRUNIT,
  CREATE_HRDEPARTMENT,
  FETCH_HRDEPARTMENTS,
  FETCH_HRDEPARTMENT,
  EDIT_HRDEPARTMENT,
  DELETE_HRDEPARTMENT,
  CREATE_HRGROUP,
  FETCH_HRGROUPS,
  FETCH_HRGROUP,
  EDIT_HRGROUP,
  DELETE_HRGROUP,
  CREATE_HRDIVISION,
  FETCH_HRDIVISIONS,
  FETCH_HRDIVISION,
  EDIT_HRDIVISION,
  DELETE_HRDIVISION,
  CREATE_HRDESIGNATION,
  FETCH_HRDESIGNATIONS,
  FETCH_HRDESIGNATION,
  EDIT_HRDESIGNATION,
  DELETE_HRDESIGNATION,
  CREATE_HRKPISESSION,
  FETCH_HRKPISESSIONS,
  FETCH_HRKPISESSION,
  EDIT_HRKPISESSION,
  DELETE_HRKPISESSION,
  CREATE_HRAPPRAISALSEASON,
  FETCH_HRAPPRAISALSEASONS,
  FETCH_HRAPPRAISALSEASON,
  EDIT_HRAPPRAISALSEASON,
  DELETE_HRAPPRAISALSEASON,
  CREATE_HRROLE,
  FETCH_HRROLES,
  FETCH_HRROLE,
  EDIT_HRROLE,
  DELETE_HRROLE,
  CREATE_HRJOBDESCRIPTION,
  FETCH_HRJOBDESCRIPTIONS,
  FETCH_HRJOBDESCRIPTION,
  EDIT_HRJOBDESCRIPTION,
  DELETE_HRJOBDESCRIPTION,
  CREATE_HRPLANNINGSKILLSET,
  FETCH_HRPLANNINGSKILLSETS,
  FETCH_HRPLANNINGSKILLSET,
  EDIT_HRPLANNINGSKILLSET,
  DELETE_HRPLANNINGSKILLSET,
  CREATE_HRRECRUITMENTINITIATION,
  FETCH_HRRECRUITMENTINITIATIONS,
  FETCH_HRRECRUITMENTINITIATION,
  EDIT_HRRECRUITMENTINITIATION,
  DELETE_HRRECRUITMENTINITIATION,
  CREATE_HRRECRUITMENTINTERVIEW,
  FETCH_HRRECRUITMENTINTERVIEWS,
  FETCH_HRRECRUITMENTINTERVIEW,
  EDIT_HRRECRUITMENTINTERVIEW,
  DELETE_HRRECRUITMENTINTERVIEW,
  CREATE_HRRECRUITMENTSELECTION,
  FETCH_HRRECRUITMENTSELECTIONS,
  FETCH_HRRECRUITMENTSELECTION,
  EDIT_HRRECRUITMENTSELECTION,
  DELETE_HRRECRUITMENTSELECTION,
  CREATE_HRRECRUITMENTONBOARD,
  FETCH_HRRECRUITMENTONBOARDS,
  FETCH_HRRECRUITMENTONBOARD,
  EDIT_HRRECRUITMENTONBOARD,
  DELETE_HRRECRUITMENTONBOARD,
  CREATE_HRRECRUITMENTPLACEMENT,
  FETCH_HRRECRUITMENTPLACEMENTS,
  FETCH_HRRECRUITMENTPLACEMENT,
  EDIT_HRRECRUITMENTPLACEMENT,
  DELETE_HRRECRUITMENTPLACEMENT,
  CREATE_HRCOMPENSATIONSALARY,
  FETCH_HRCOMPENSATIONSALARYS,
  FETCH_HRCOMPENSATIONSALARY,
  EDIT_HRCOMPENSATIONSALARY,
  DELETE_HRCOMPENSATIONSALARY,
  CREATE_HRCOMPENSATIONBONUS,
  FETCH_HRCOMPENSATIONBONUSES,
  FETCH_HRCOMPENSATIONBONUS,
  EDIT_HRCOMPENSATIONBONUS,
  DELETE_HRCOMPENSATIONBONUS,
  CREATE_HRCOMPENSATIONLEAVEALLOWANCE,
  FETCH_HRCOMPENSATIONLEAVEALLOWANCES,
  FETCH_HRCOMPENSATIONLEAVEALLOWANCE,
  EDIT_HRCOMPENSATIONLEAVEALLOWANCE,
  DELETE_HRCOMPENSATIONLEAVEALLOWANCE,
  CREATE_HRCOMPENSATIONOVERTIME,
  FETCH_HRCOMPENSATIONOVERTIMES,
  FETCH_HRCOMPENSATIONOVERTIME,
  EDIT_HRCOMPENSATIONOVERTIME,
  DELETE_HRCOMPENSATIONOVERTIME,
  CREATE_HRCOMPENSATIONSTAFFLOAN,
  FETCH_HRCOMPENSATIONSTAFFLOANS,
  FETCH_HRCOMPENSATIONSTAFFLOAN,
  EDIT_HRCOMPENSATIONSTAFFLOAN,
  DELETE_HRCOMPENSATIONSTAFFLOAN,
  CREATE_HRCOMPENSATIONSALARYADVANCE,
  FETCH_HRCOMPENSATIONSALARYADVANCES,
  FETCH_HRCOMPENSATIONSALARYADVANCE,
  EDIT_HRCOMPENSATIONSALARYADVANCE,
  DELETE_HRCOMPENSATIONSALARYADVANCE,
  CREATE_HRCOMPENSATIONCERTIFICATEREFUND,
  FETCH_HRCOMPENSATIONCERTIFICATEREFUNDS,
  FETCH_HRCOMPENSATIONCERTIFICATEREFUND,
  EDIT_HRCOMPENSATIONCERTIFICATEREFUND,
  DELETE_HRCOMPENSATIONCERTIFICATEREFUND,
  CREATE_HRLEAVELEAVE,
  FETCH_HRLEAVELEAVES,
  FETCH_HRLEAVELEAVE,
  EDIT_HRLEAVELEAVE,
  DELETE_HRLEAVELEAVE,
  CREATE_HREXITEXIT,
  FETCH_HREXITEXITS,
  FETCH_HREXITEXIT,
  EDIT_HREXITEXIT,
  DELETE_HREXITEXIT,
  CREATE_HREXITCLEARANCE,
  FETCH_HREXITCLEARANCES,
  FETCH_HREXITCLEARANCE,
  EDIT_HREXITCLEARANCE,
  DELETE_HREXITCLEARANCE,
  CREATE_HRPERFORMANCEAPPRAISAL,
  FETCH_HRPERFORMANCEAPPRAISALS,
  FETCH_HRPERFORMANCEAPPRAISAL,
  EDIT_HRPERFORMANCEAPPRAISAL,
  DELETE_HRPERFORMANCEAPPRAISAL,
  CREATE_HRPERFORMANCEPERFORMANCE,
  FETCH_HRPERFORMANCEPERFORMANCES,
  FETCH_HRPERFORMANCEPERFORMANCE,
  EDIT_HRPERFORMANCEPERFORMANCE,
  DELETE_HRPERFORMANCEPERFORMANCE,
  CREATE_HRSELFSERVICELEAVE,
  FETCH_HRSELFSERVICELEAVES,
  FETCH_HRSELFSERVICELEAVE,
  EDIT_HRSELFSERVICELEAVE,
  DELETE_HRSELFSERVICELEAVE,
  CREATE_HRSELFSERVICESTAFFLOAN,
  FETCH_HRSELFSERVICESTAFFLOANS,
  FETCH_HRSELFSERVICESTAFFLOAN,
  EDIT_HRSELFSERVICESTAFFLOAN,
  DELETE_HRSELFSERVICESTAFFLOAN,
  CREATE_HRSELFSERVICECERTREFUND,
  FETCH_HRSELFSERVICECERTREFUNDS,
  FETCH_HRSELFSERVICECERTREFUND,
  EDIT_HRSELFSERVICECERTREFUND,
  DELETE_HRSELFSERVICECERTREFUND,
  CREATE_HRSELFSERVICEEXIT,
  FETCH_HRSELFSERVICEEXITS,
  FETCH_HRSELFSERVICEEXIT,
  EDIT_HRSELFSERVICEEXIT,
  DELETE_HRSELFSERVICEEXIT,
  CREATE_HRSELFSERVICEOVERTIME,
  FETCH_HRSELFSERVICEOVERTIMES,
  FETCH_HRSELFSERVICEOVERTIME,
  EDIT_HRSELFSERVICEOVERTIME,
  DELETE_HRSELFSERVICEOVERTIME,
  CREATE_HRSELFSERVICESALARYADVANCE,
  FETCH_HRSELFSERVICESALARYADVANCES,
  FETCH_HRSELFSERVICESALARYADVANCE,
  EDIT_HRSELFSERVICESALARYADVANCE,
  DELETE_HRSELFSERVICESALARYADVANCE,
  CREATE_HRSELFSERVICEAPPRAISAL,
  FETCH_HRSELFSERVICEAPPRAISALS,
  FETCH_HRSELFSERVICEAPPRAISAL,
  EDIT_HRSELFSERVICEAPPRAISAL,
  DELETE_HRSELFSERVICEAPPRAISAL,
  CREATE_HRSELFSERVICEPAYSLIP,
  FETCH_HRSELFSERVICEPAYSLIPS,
  FETCH_HRSELFSERVICEPAYSLIP,
  EDIT_HRSELFSERVICEPAYSLIP,
  DELETE_HRSELFSERVICEPAYSLIP,
  CREATE_HRUTILITYEMOLUMENTPERIOD,
  FETCH_HRUTILITYEMOLUMENTPERIODS,
  FETCH_HRUTILITYEMOLUMENTPERIOD,
  EDIT_HRUTILITYEMOLUMENTPERIOD,
  DELETE_HRUTILITYEMOLUMENTPERIOD,
  CREATE_HRUTILITYBONUSRATE,
  FETCH_HRUTILITYBONUSRATES,
  FETCH_HRUTILITYBONUSRATE,
  EDIT_HRUTILITYBONUSRATE,
  DELETE_HRUTILITYBONUSRATE,
  CREATE_HRUTILITYOVERTIMERATE,
  FETCH_HRUTILITYOVERTIMERATES,
  FETCH_HRUTILITYOVERTIMERATE,
  EDIT_HRUTILITYOVERTIMERATE,
  DELETE_HRUTILITYOVERTIMERATE,
  CREATE_HRUTILITYORGANIZATIONLEVEL,
  FETCH_HRUTILITYORGANIZATIONLEVELS,
  FETCH_HRUTILITYORGANIZATIONLEVEL,
  EDIT_HRUTILITYORGANIZATIONLEVEL,
  DELETE_HRUTILITYORGANIZATIONLEVEL,
  CREATE_HRUTILITYSALARYGRADE,
  FETCH_HRUTILITYSALARYGRADES,
  FETCH_HRUTILITYSALARYGRADE,
  EDIT_HRUTILITYSALARYGRADE,
  DELETE_HRUTILITYSALARYGRADE,
  CREATE_HRUTILITYSALARYGRADEDEDUCTABLE,
  FETCH_HRUTILITYSALARYGRADEDEDUCTABLES,
  FETCH_HRUTILITYSALARYGRADEDEDUCTABLE,
  EDIT_HRUTILITYSALARYGRADEDEDUCTABLE,
  DELETE_HRUTILITYSALARYGRADEDEDUCTABLE,
  CREATE_HRUTILITYEXTRADEDUCTABLE,
  FETCH_HRUTILITYEXTRADEDUCTABLES,
  FETCH_HRUTILITYEXTRADEDUCTABLE,
  EDIT_HRUTILITYEXTRADEDUCTABLE,
  DELETE_HRUTILITYEXTRADEDUCTABLE,
  CREATE_ASSETSET,
  FETCH_ASSETSETS,
  FETCH_ASSETSET,
  EDIT_ASSETSET,
  DELETE_ASSETSET,
  CREATE_ASSETSETBATCH,
  FETCH_ASSETSETBATCHES,
  FETCH_ASSETSETBATCH,
  EDIT_ASSETSETBATCH,
  DELETE_ASSETSETBATCH,
  CREATE_STOCKREQUISITION,
  FETCH_STOCKREQUISITIONS,
  FETCH_STOCKREQUISITION,
  EDIT_STOCKREQUISITION,
  DELETE_STOCKREQUISITION,
} from "./types";

//authentication and authorization  operations

// export const signIn = (userId) => {
//   return {
//     type: SIGN_IN,
//     payload: userId,
//   };
// };

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const signUp = (formValues) => {
  return async (dispatch) => {
    const response = await data.post("/users/signup", formValues);
    dispatch({ type: SIGN_UP, payload: response.data.data });
  };
};

export const signIn = (formValues) => {
  return async (dispatch) => {
    const response = await data.post("/users/login", formValues);
    if (response.status === 200) {
      dispatch({ type: SIGN_IN, payload: response.data });

      //history.push("/dashboard");
    } else {
      console.log("something went wrong here");
    }
  };
};
//category resources crud operations
export const createCategory = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    console.log("the user id id:", userId);
    const response = await data.post("/categories", {
      ...formValues,
      userId,
    });

    dispatch({ type: CREATE_CATEGORY, payload: response.data.data.data });
  };
};

export const fetchCategories = () => {
  return async (dispatch) => {
    const response = await data.get("/categories");
    dispatch({ type: FETCH_CATEGORIES, payload: response.data.data.data });
  };
};

export const fetchCategory = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/categories/${id}`);
    dispatch({ type: FETCH_CATEGORY, payload: response.data.data });
  };
};

export const editCategory = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/categories/${id}`, formValues);
    console.log("this updated response:", response);
    dispatch({ type: EDIT_CATEGORY, payload: response.data.data.data });
    //history.push("/");
  };
};

export const deleteCategory = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/categories/${id}`);
    dispatch({ type: DELETE_CATEGORY, payload: id });
    history.push("/categories");
  };
};

///////////////user resource crud operation //////////////////////////////////////
export const createUser = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  return async (dispatch) => {
    const response = await data.post("/users");

    dispatch({ type: CREATE_USER, payload: response.data.data.data });
    //history.push("/users");
  };
};

export const fetchUsers = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/users", {
      params: { userType: "staff" },
    });
    console.log("user response:", response.data);
    dispatch({ type: FETCH_USERS, payload: response.data.data.data });
  };
};

export const fetchUser = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/users/${id}`);
    dispatch({ type: FETCH_USER, payload: response.data });
  };
};

export const editUser = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/users/${id}`, formValues);
    dispatch({ type: EDIT_USER, payload: response.data });
    //history.push("/users");
  };
};

export const deleteUser = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/users/${id}`);
    dispatch({ type: DELETE_USER, payload: id });
    // history.push("/users");
  };
};

////////////////////////////////////////////////////////

//city resource crud operation
export const createCity = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch, getState) => {
    const response = await data.post("/cities", formValues);

    console.log("city response:", response);
    dispatch({ type: CREATE_CITY, payload: response.data.data.data });
    //history.push("/cities");
  };
};

export const fetchCities = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/cities");
    console.log("the cities are:", response);
    dispatch({ type: FETCH_CITIES, payload: response.data.data.data });
  };
};

export const fetchCity = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/cities/${id}`);
    console.log("fetch city response here:", response);
    dispatch({ type: FETCH_CITY, payload: response.data.data.data });
  };
};

export const editCity = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/cities/${id}`, formValues);
    console.log("index response:", response);
    dispatch({ type: EDIT_CITY, payload: response.data.data.data });
    //history.push("/cities");
  };
};

export const deleteCity = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/cities/${id}`);
    dispatch({ type: DELETE_CITY, payload: id });
    //history.push("/cities");
  };
};

///////////////////////Locations////////////////////////////////////

//city resource crud operation
export const createLocation = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch, getState) => {
    const response = await data.post("/locations", formValues);

    console.log("new location response:", response);
    dispatch({ type: CREATE_LOCATION, payload: response.data.data.data });
    //history.push("/cities");
  };
};

export const fetchLocations = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/locations");
    console.log("the locations are:", response);
    dispatch({ type: FETCH_LOCATIONS, payload: response.data.data.data });
  };
};

export const fetchLocation = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/locations/${id}`);
    dispatch({ type: FETCH_LOCATION, payload: response.data.data.data });
  };
};

// export const editLocation = (id, formValues, token) => {
//   data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//   return async (dispatch) => {
//     const response = await data.patch(`/locations/${id}`, formValues);
//     console.log("thsi is the response:", response);
//     if (response) {
//       if (response.data.status === "success") {
//         dispatch({
//           type: EDIT_LOCATION_SUCCEEDED,
//           payload: response.data.data.data,
//         });
//       } else {
//         dispatch({ type: EDIT_LOCATION_FAILED, status: "API Failed" });
//       }
//     } else {
//       dispatch({ type: EDIT_LOCATION_FAILED, status: "API Failed" });
//     }

//     //history.push("/cities");
//   };
// };

export const editLocation = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/locations/${id}`, formValues);
    console.log("thsi is the response:", response);
    if (response) {
      if (response.data.status === "success") {
        dispatch({
          type: EDIT_LOCATION_SUCCEEDED,
          payload: response.data.data.data,
        });
      } else {
        dispatch({ type: EDIT_LOCATION_FAILED, status: "API Failed" });
        // const status = "failed";
        // return status;
      }
    } else {
      dispatch({ type: EDIT_LOCATION_FAILED, status: "API Failed" });
    }

    //history.push("/cities");
  };
};

export const deleteLocation = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/locations/${id}`);
    dispatch({ type: DELETE_LOCATION, payload: id });
    //history.push("/cities");
  };
};

/////////////////////////////////////////////////////////////////////

//vendor resource crud operation
export const createVendor = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await data.post("/vendors", {
      ...formValues,
      userId,
    });

    //console.log(response);
    dispatch({ type: CREATE_VENDOR, payload: response.data });
    history.push("/vendors");
  };
};

export const fetchVendors = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/vendors");
    console.log("vendor response is:", response);

    dispatch({ type: FETCH_VENDORS, payload: response.data.data.data });
  };
};

export const fetchVendor = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/vendors/${id}`);
    dispatch({ type: FETCH_VENDOR, payload: response.data });
  };
};

export const editVendor = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/vendors/${id}`, formValues);
    dispatch({ type: EDIT_VENDOR, payload: response.data });
    history.push("/vendors");
  };
};

export const deleteVendor = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/vendors/${id}`);
    dispatch({ type: DELETE_VENDOR, payload: id });
    history.push("/vendors");
  };
};

///////////////////////////////////////////////////////////////////

//product resource crud operation
export const createProduct = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await data.post("/products", {
      ...formValues,
      userId,
    });

    //console.log(response);
    dispatch({ type: CREATE_PRODUCT, payload: response.data });
    history.push("/products");
  };
};

export const fetchProducts = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/products");
    console.log("the products are:", response);
    dispatch({ type: FETCH_PRODUCTS, payload: response.data.data.data });
  };
};

export const fetchProduct = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/products/${id}`);
    dispatch({ type: FETCH_PRODUCT, payload: response.data });
  };
};

export const editProduct = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/products/${id}`, formValues);
    dispatch({ type: EDIT_PRODUCT, payload: response.data });
    history.push("/products");
  };
};

export const deleteProduct = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/products/${id}`);
    dispatch({ type: DELETE_PRODUCT, payload: id });
    history.push("/products");
  };
};

//////////////////////////////////////////////////////////////////

//policy resource crud operation
export const createPolicy = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await data.post("/policies", {
      ...formValues,
      userId,
    });

    //console.log(response);
    dispatch({ type: CREATE_POLICY, payload: response.data });
    history.push("/policies");
  };
};

export const fetchPolicies = (token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get("/policies");
    dispatch({ type: FETCH_POLICIES, payload: response.data.data.data });
  };
};

export const fetchPolicy = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/policies/${id}`);
    dispatch({ type: FETCH_POLICY, payload: response.data });
  };
};

export const editPolicy = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/policies/${id}`, formValues);
    dispatch({ type: EDIT_POLICY, payload: response.data });
    history.push("/policies");
  };
};

export const deletePolicy = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  return async (dispatch) => {
    await data.delete(`/policies/${id}`);
    dispatch({ type: DELETE_POLICY, payload: id });
    history.push("/policies");
  };
};

////////////////////////////////////////////////////////////////////////
//country resource models

export const createCountry = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  console.log("form values:", formValues);
  console.log("token:", token);

  return async (dispatch, getState) => {
    const response = await data.post("/countries", formValues);
    dispatch({ type: CREATE_COUNTRY, payload: response.data.data.data });
  };
};

export const fetchCountries = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/countries");
    console.log("countries response is:", response);

    dispatch({ type: FETCH_COUNTRIES, payload: response.data.data.data });
  };
};

export const fetchCountry = (id, token) => {
  return async (dispatch) => {
    const response = await data.get(`/countries/${id}`);
    dispatch({ type: FETCH_COUNTRY, payload: response.data });
  };
};

export const editCountry = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/countries/${id}`, formValues);
    dispatch({ type: EDIT_COUNTRY, payload: response.data.data.data });
    //history.push("/utility/countries");
  };
};

export const deleteCountry = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/countries/${id}`);
    dispatch({ type: DELETE_COUNTRY, payload: id });
    //history.push("/utilities/countries");
  };
};

////////////////////////////////////////////////////////////////////////
//state resource models

export const createState = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch, getState) => {
    const response = await data.post("/states", formValues);
    //console.log(response);
    dispatch({ type: CREATE_STATE, payload: response.data.data.data });
    //history.push("/utilities/states");
  };
};

export const fetchStates = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/states");
    //console.log("vendor response is:", response);

    dispatch({ type: FETCH_STATES, payload: response.data.data.data });
  };
};

export const fetchState = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/states/${id}`);
    dispatch({ type: FETCH_STATE, payload: response.data });
  };
};

export const editState = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/states/${id}`, formValues);

    dispatch({ type: EDIT_STATE, payload: response.data.data.data });
    //history.push("/utilities/states");
  };
};

export const deleteState = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/states/${id}`);
    dispatch({ type: DELETE_STATE, payload: id });
    //history.push("/utilities/states");
  };
};

////////////////////////// working on service outlets //////////////////////

export const createServiceOutlet = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/serviceoutlets", formValues);

    dispatch({ type: CREATE_SERVICEOUTLET, payload: response.data.data.data });
    //history.push("/cities");
  };
};

export const fetchServiceOutlets = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/serviceoutlets", {
      params: { isHeadofficeOutlet: false },
    });

    dispatch({ type: FETCH_SERVICEOUTLETS, payload: response.data.data.data });
  };
};

export const fetchServiceOutlet = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/serviceoutlets/${id}`);
    dispatch({ type: FETCH_SERVICEOUTLET, payload: response.data.data.data });
  };
};

export const editServiceOutlet = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/serviceoutlets/${id}`, formValues);
    dispatch({ type: EDIT_SERVICEOUTLET, payload: response.data.data.data });
    //history.push("/cities");
  };
};

export const deleteServiceOutlet = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/serviceoutlets/${id}`);
    dispatch({ type: DELETE_SERVICEOUTLET, payload: id });
    //history.push("/cities");
  };
};

/////////////////Head officer Service Outlet /////////////////////////////

export const createHoServiceOutlet = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/serviceoutlets", formValues);

    dispatch({
      type: CREATE_HOSERVICEOUTLET,
      payload: response.data.data.data,
    });
  };
};

export const fetchHoServiceOutlets = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/serviceoutlets", {
      params: { isHeadofficeOutlet: true },
    });
    console.log("response is:", response.data);
    dispatch({
      type: FETCH_HOSERVICEOUTLETS,
      payload: response.data.data.data,
    });
  };
};

export const fetchHoServiceOutlet = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/serviceoutlets/${id}`);
    dispatch({ type: FETCH_HOSERVICEOUTLET, payload: response.data.data.data });
  };
};

export const editHoServiceOutlet = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/serviceoutlets/${id}`, formValues);
    dispatch({ type: EDIT_HOSERVICEOUTLET, payload: response.data.data.data });
  };
};

export const deleteHoServiceOutlet = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/serviceoutlets/${id}`);
    dispatch({ type: DELETE_HOSERVICEOUTLET, payload: id });
  };
};

//////////////////////Scheme Code ////////////////////////////////////////

export const createSchemeCode = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/schemecodes", formValues);

    dispatch({ type: CREATE_SCHEMECODE, payload: response.data.data.data });
  };
};

export const fetchSchemeCodes = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/schemecodes");

    dispatch({ type: FETCH_SCHEMECODES, payload: response.data.data.data });
  };
};

export const fetchSchemeCode = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/schemecodes/${id}`);
    dispatch({ type: FETCH_SCHEMECODE, payload: response.data.data.data });
  };
};

export const editSchemeCode = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/schemecodes/${id}`, formValues);
    dispatch({ type: EDIT_SCHEMECODE, payload: response.data.data.data });
  };
};

export const deleteSchemeCode = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/schemecodes/${id}`);
    dispatch({ type: DELETE_SCHEMECODE, payload: id });
  };
};

//////////////////TEMPORARY SCRIPT //////////////////

export const fetchOrders = () => {};

/////////////////////////////////////////////////////

/////////////////////////////CURRENCY //////////////////////////////////////

export const createCurrency = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/currencies", formValues);

    dispatch({ type: CREATE_CURRENCY, payload: response.data.data.data });
  };
};

export const fetchCurrencies = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/currencies");

    dispatch({ type: FETCH_CURRENCIES, payload: response.data.data.data });
  };
};

export const fetchCurrency = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/currencies/${id}`);
    dispatch({ type: FETCH_CURRENCY, payload: response.data.data.data });
  };
};

export const editCurrency = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/currencies/${id}`, formValues);
    dispatch({ type: EDIT_CURRENCY, payload: response.data.data.data });
  };
};

export const deleteCurrency = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/currencies/${id}`);
    dispatch({ type: DELETE_CURRENCY, payload: id });
  };
};

//////////////////////////GL HEADS ///////////////////////////////

export const createGlHead = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/glheadaccounts", formValues);

    dispatch({ type: CREATE_GLCODE, payload: response.data.data.data });
  };
};

export const fetchGlHeads = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/glheadaccounts");

    dispatch({ type: FETCH_GLCODES, payload: response.data.data.data });
  };
};

export const fetchGlCode = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/glheadaccounts/${id}`);
    dispatch({ type: FETCH_GLCODE, payload: response.data.data.data });
  };
};

export const editGlHead = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/glheadaccounts/${id}`, formValues);
    dispatch({ type: EDIT_GLCODE, payload: response.data.data.data });
  };
};

export const deleteGlHead = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/glheadaccounts/${id}`);
    dispatch({ type: DELETE_GLCODE, payload: id });
  };
};

/////////////////////////////SUBGL HEAD //////////////////////////////////////////////

export const createSubGlHead = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/subglheadaccounts", formValues);

    dispatch({ type: CREATE_SUBGLCODE, payload: response.data.data.data });
  };
};

export const fetchSubGlHeads = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/subglheadaccounts");

    dispatch({ type: FETCH_SUBGLCODES, payload: response.data.data.data });
  };
};

export const fetchSubGlHead = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/subglheadaccounts/${id}`);
    dispatch({ type: FETCH_SUBGLCODE, payload: response.data.data.data });
  };
};

export const editSubGlHead = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/subglheadaccounts/${id}`, formValues);
    dispatch({ type: EDIT_GLSUBCODE, payload: response.data.data.data });
  };
};

export const deleteSubGlHead = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/subglheadaccounts/${id}`);
    dispatch({ type: DELETE_SUBGLCODE, payload: id });
  };
};

/////////////////////////////////////////TRANSACTION TYPES /////////////////////////////

export const createTransType = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/transactiontypes", formValues);

    dispatch({ type: CREATE_TRANSTYPE, payload: response.data.data.data });
  };
};

export const fetchTransTypes = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/transactiontypes");
    console.log("trans types response:", response.data);

    dispatch({ type: FETCH_TRANSTYPES, payload: response.data.data.data });
  };
};

export const fetchTransType = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/transactiontypes/${id}`);
    dispatch({ type: FETCH_TRANSTYPE, payload: response.data.data.data });
  };
};

export const editTransType = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/transactiontypes/${id}`, formValues);
    dispatch({ type: EDIT_TRANSTYPE, payload: response.data.data.data });
  };
};

export const deleteTransType = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/transactiontypes/${id}`);
    dispatch({ type: DELETE_TRANSTYPE, payload: id });
  };
};

//////////////////////////////////  OFFICE OPERATIONS AND SERVICES /////////////////

export const createOfficeOperation = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/officeoperations", formValues);

    dispatch({
      type: CREATE_OFFICEOPERATION,
      payload: response.data.data.data,
    });
  };
};

export const fetchOfficeOperations = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");
    console.log("trans types response:", response.data);

    dispatch({
      type: FETCH_OFFICEOPERATIONS,
      payload: response.data.data.data,
    });
  };
};

export const fetchOfficeOperation = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({ type: FETCH_OFFICEOPERATION, payload: response.data.data.data });
  };
};

export const editOfficeOperation = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({ type: EDIT_OFFICEOPERATION, payload: response.data.data.data });
  };
};

export const deleteOfficeOperation = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_OFFICEOPERATION, payload: id });
  };
};

///////////////////////////////ASSET STORE TYPES ///////////////////////////////

export const createStoreType = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/storetypes", formValues);

    dispatch({
      type: CREATE_STORETYPE,
      payload: response.data.data.data,
    });
  };
};

export const fetchStoreTypes = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/storetypes");
    console.log("trans types response:", response.data);

    dispatch({
      type: FETCH_STORETYPES,
      payload: response.data.data.data,
    });
  };
};

export const fetchStoreType = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/storetypes/${id}`);
    dispatch({ type: FETCH_STORETYPE, payload: response.data.data.data });
  };
};

export const editStoreType = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/storetypes/${id}`, formValues);
    dispatch({ type: EDIT_STORETYPE, payload: response.data.data.data });
  };
};

export const deleteStoreType = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/storetypes/${id}`);
    dispatch({ type: DELETE_STORETYPE, payload: id });
  };
};

//////////////////////// ASSET SUBCLASSES ///////////////////////////////////////////

export const createAssetSubclass = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/assetsubclasses", formValues);

    dispatch({
      type: CREATE_SUBCLASS,
      payload: response.data.data.data,
    });
  };
};

export const fetchAssetSubclasses = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/assetsubclasses");

    dispatch({
      type: FETCH_SUBCLASSES,
      payload: response.data.data.data,
    });
  };
};

export const fetchAssetSubclass = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/assetsubclasses/${id}`);
    dispatch({ type: FETCH_SUBCLASS, payload: response.data.data.data });
  };
};

export const editAssetSubclass = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/assetsubclasses/${id}`, formValues);
    dispatch({ type: EDIT_SUBCLASS, payload: response.data.data.data });
  };
};

export const deleteAssetSubclass = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/assetsubclasses/${id}`);
    dispatch({ type: DELETE_SUBCLASS, payload: id });
  };
};

//////////////////////////////////// ASSET TYPES /////////////////////////////////

export const createAssetType = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/assettypes", formValues);

    dispatch({
      type: CREATE_ASSETTYPE,
      payload: response.data.data.data,
    });
  };
};

export const fetchAssetTypes = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/assettypes");

    dispatch({
      type: FETCH_ASSETTYPES,
      payload: response.data.data.data,
    });
  };
};

export const fetchAssetType = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/assettypes/${id}`);
    dispatch({ type: FETCH_ASSETTYPE, payload: response.data.data.data });
  };
};

export const editAssetType = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/assettypes/${id}`, formValues);
    dispatch({ type: EDIT_ASSETTYPE, payload: response.data.data.data });
  };
};

export const deleteAssetType = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/assettypes/${id}`);
    dispatch({ type: DELETE_ASSETTYPE, payload: id });
  };
};

//////////////////////////////////////// DEPRECIATION TYPES ///////////////////////////

export const createDepreciationType = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/officeoperations", formValues);

    dispatch({
      type: CREATE_DEPRECIATIONTYPE,
      payload: response.data.data.data,
    });
  };
};

export const fetchDepreciationTypes = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_DEPRECIATIONTYPES,
      payload: response.data.data.data,
    });
  };
};

export const fetchDepreciationType = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_DEPRECIATIONTYPE,
      payload: response.data.data.data,
    });
  };
};

export const editDepreciationType = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({ type: EDIT_DEPRECIATIONTYPE, payload: response.data.data.data });
  };
};

export const deleteDepreciationType = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_DEPRECIATIONTYPE, payload: id });
  };
};

///////////////////////////////// ASSETS MAINTENANCE TYPES /////////////////////////////

export const createMaintenanceType = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/maintenancetypes", formValues);

    dispatch({
      type: CREATE_MAINTENANCETYPE,
      payload: response.data.data.data,
    });
  };
};

export const fetchMaintenanceTypes = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/maintenancetypes");

    dispatch({
      type: FETCH_MAINTENANCETYPES,
      payload: response.data.data.data,
    });
  };
};

export const fetchMaintenanceType = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/maintenancetypes/${id}`);
    dispatch({
      type: FETCH_MAINTENANCETYPE,
      payload: response.data.data.data,
    });
  };
};

export const editMaintenanceType = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/maintenancetypes/${id}`, formValues);
    dispatch({ type: EDIT_MAINTENANCETYPE, payload: response.data.data.data });
  };
};

export const deleteMaintenanceType = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/maintenancetypes/${id}`);
    dispatch({ type: DELETE_MAINTENANCETYPE, payload: id });
  };
};

//////////////////////////////// ASSET MEASUREMENT UNIT ////////////////////////

export const createMeasurementUnit = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/assetmeasurementunits", formValues);

    dispatch({
      type: CREATE_MEASUREMENTUNIT,
      payload: response.data.data.data,
    });
  };
};

export const fetchMeasurementUnits = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/assetmeasurementunits");

    dispatch({
      type: FETCH_MEASUREMENTUNITS,
      payload: response.data.data.data,
    });
  };
};

export const fetchMeasurementUnit = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/assetmeasurementunits/${id}`);
    dispatch({
      type: FETCH_MEASUREMENTUNIT,
      payload: response.data.data.data,
    });
  };
};

export const editMeasurementUnit = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(
      `/assetmeasurementunits/${id}`,
      formValues
    );
    dispatch({ type: EDIT_MEASUREMENTUNIT, payload: response.data.data.data });
  };
};

export const deleteMeasurementUnit = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/assetmeasurementunits/${id}`);
    dispatch({ type: DELETE_MEASUREMENTUNIT, payload: id });
  };
};

///////////////////////////////// STOCK ///////////////////////////////////

export const createStock = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/assetstocks", formValues);

    dispatch({
      type: CREATE_STOCK,
      payload: response.data.data.data,
    });
  };
};

export const fetchStocks = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/assetstocks");

    dispatch({
      type: FETCH_STOCKS,
      payload: response.data.data.data,
    });
  };
};

export const fetchStock = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/assetstocks/${id}`);
    dispatch({
      type: FETCH_STOCK,
      payload: response.data.data.data,
    });
  };
};

export const editStock = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/assetstocks/${id}`, formValues);
    dispatch({ type: EDIT_STOCK, payload: response.data.data.data });
  };
};

export const deleteStock = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/assetstocks/${id}`);
    dispatch({ type: DELETE_STOCK, payload: id });
  };
};

//////////////////////////////// OTHER ASSETS ////////////////////////////////////

export const createOtherAsset = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/assets", formValues);

    dispatch({
      type: CREATE_OTHERASSET,
      payload: response.data.data.data,
    });
  };
};

export const fetchOtherAssets = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/assets");

    dispatch({
      type: FETCH_OTHERASSETS,
      payload: response.data.data.data,
    });
  };
};

export const fetchOtherAsset = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/assets/${id}`);
    dispatch({
      type: FETCH_OTHERASSET,
      payload: response.data.data.data,
    });
  };
};

export const editOtherAsset = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/assets/${id}`, formValues);
    dispatch({ type: EDIT_OTHERASSET, payload: response.data.data.data });
  };
};

export const deleteOtherAsset = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/assets/${id}`);
    dispatch({ type: DELETE_OTHERASSET, payload: id });
  };
};

////////////////////////////// ASSET PROCUREMENT ACTION CREATORS /////////////////

export const createAssetProcurement = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/assetprocurements", formValues);

    dispatch({
      type: CREATE_ASSETPROCUREMENT,
      payload: response.data.data.data,
    });
  };
};

export const fetchAssetProcurements = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/assetprocurements");

    dispatch({
      type: FETCH_ASSETPROCUREMENTS,
      payload: response.data.data.data,
    });
  };
};

export const fetchAssetProcurement = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/assetprocurements/${id}`);
    dispatch({
      type: FETCH_ASSETPROCUREMENT,
      payload: response.data.data.data,
    });
  };
};

export const editAssetProcurement = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/assetprocurements/${id}`, formValues);
    dispatch({
      type: EDIT_ASSETPROCUREMENT,
      payload: response.data.data.data,
    });
  };
};

export const deleteAssetProcurement = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/assetprocurements/${id}`);
    dispatch({ type: DELETE_ASSETPROCUREMENT, payload: id });
  };
};

////////////////////////////// UNAPPROVED PROCUREMENT ///////////////////////////

export const createUnapprovedProcurement = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post(
      "/unapprovedassetprocurements",
      formValues
    );

    dispatch({
      type: CREATE_UNAPPROVEDPROCUREMENT,
      payload: response.data.data.data,
    });
  };
};

export const fetchUnapprovedProcurements = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/unapprovedassetprocurements");

    dispatch({
      type: FETCH_UNAPPROVEDPROCUREMENTS,
      payload: response.data.data.data,
    });
  };
};

export const fetchUnapprovedProcurement = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/unapprovedassetprocurements/${id}`);
    dispatch({
      type: FETCH_UNAPPROVEDPROCUREMENT,
      payload: response.data.data.data,
    });
  };
};

export const editUnapprovedProcurement = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(
      `/unapprovedassetprocurements/${id}`,
      formValues
    );
    dispatch({
      type: EDIT_UNAPPROVEDPROCUREMENT,
      payload: response.data.data.data,
    });
  };
};

export const deleteUnapprovedProcurement = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/unapprovedassetprocurements/${id}`);
    dispatch({ type: DELETE_UNAPPROVEDPROCUREMENT, payload: id });
  };
};

//////////////////////////// UNAPPROVED ASSETS MAINTENANCE /////////////////////////

export const createUnapprovedMaintenance = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/assetmaintenances", formValues);

    dispatch({
      type: CREATE_UNAPPROVEDMAINTENANCE,
      payload: response.data.data.data,
    });
  };
};

export const fetchUnapprovedMaintenances = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/assetmaintenances");

    dispatch({
      type: FETCH_UNAPPROVEDMAINTENANCES,
      payload: response.data.data.data,
    });
  };
};

export const fetchUnapprovedMaintenance = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/assetmaintenances/${id}`);
    dispatch({
      type: FETCH_UNAPPROVEDMAINTENANCE,
      payload: response.data.data.data,
    });
  };
};

export const editUnapprovedMaintenance = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/assetmaintenances/${id}`, formValues);
    dispatch({
      type: EDIT_UNAPPROVEDMAINTENANCE,
      payload: response.data.data.data,
    });
  };
};

export const deleteUnapprovedMaintenance = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/assetmaintenances/${id}`);
    dispatch({ type: DELETE_UNAPPROVEDMAINTENANCE, payload: id });
  };
};

//////////////////////////////////// APPROVED ASSET MAINTENANCES ////////////////////

export const createApprovedMaintenance = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/assetmaintenances", formValues);

    dispatch({
      type: CREATE_APPROVEDMAINTENANCE,
      payload: response.data.data.data,
    });
  };
};

export const fetchApprovedMaintenances = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/assetmaintenances");

    dispatch({
      type: FETCH_APPROVEDMAINTENANCES,
      payload: response.data.data.data,
    });
  };
};

export const fetchApprovedMaintenance = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/assetmaintenances/${id}`);
    dispatch({
      type: FETCH_APPROVEDMAINTENANCE,
      payload: response.data.data.data,
    });
  };
};

export const editApprovedMaintenance = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/assetmaintenances/${id}`, formValues);
    dispatch({
      type: EDIT_APPROVEDMAINTENANCE,
      payload: response.data.data.data,
    });
  };
};

export const deleteApprovedMaintenance = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/assetmaintenances/${id}`);
    dispatch({ type: DELETE_APPROVEDMAINTENANCE, payload: id });
  };
};

///////////////////////////// EXECUTED ASSET MAINTENNACES ACTION CREATORS //////////////////

export const createExecutedMaintenance = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/assetmaintenances", formValues);

    dispatch({
      type: CREATE_EXECUTEDMAINTENANCE,
      payload: response.data.data.data,
    });
  };
};

export const fetchExecutedMaintenances = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/assetmaintenances");

    dispatch({
      type: FETCH_EXECUTEDMAINTENANCES,
      payload: response.data.data.data,
    });
  };
};

export const fetchExecutedMaintenance = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/assetmaintenances/${id}`);
    dispatch({
      type: FETCH_EXECUTEDMAINTENANCE,
      payload: response.data.data.data,
    });
  };
};

export const editExecutedMaintenance = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/assetmaintenances/${id}`, formValues);
    dispatch({
      type: EDIT_EXECUTEDMAINTENANCE,
      payload: response.data.data.data,
    });
  };
};

export const deleteExecutedMaintenance = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/assetmaintenances/${id}`);
    dispatch({ type: DELETE_EXECUTEDMAINTENANCE, payload: id });
  };
};

///////////////////////////// INVENTORY STOCK ACTION CREATORS //////////////////

export const makeinventoryStockRequisitionRequest = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/assetstocks", formValues);

    dispatch({
      type: MAKE_INVENTORYREQUISITIONREQUEST,
      payload: response.data.data.data,
    });
  };
};

export const makeinventoryStockRetirementRequest = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/assetstocks", formValues);

    dispatch({
      type: MAKE_INVENTORYRETIREMENTREQUEST,
      payload: response.data.data.data,
    });
  };
};

export const makeinventoryStockDispositionRequest = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/assetstocks", formValues);

    dispatch({
      type: MAKE_INVENTORYDISPOSALREQUEST,
      payload: response.data.data.data,
    });
  };
};

export const makeinventoryStockTransferRequest = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/assetstocks", formValues);

    dispatch({
      type: MAKE_INVENTORYTRANSFERREQUEST,
      payload: response.data.data.data,
    });
  };
};

export const fetchInventoryStocks = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/assetstocks");

    dispatch({
      type: FETCH_INVENTORYSTOCKS,
      payload: response.data.data.data,
    });
  };
};

export const fetchInventoryStock = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/assetstocks/${id}`);
    dispatch({
      type: FETCH_INVENTORYSTOCK,
      payload: response.data.data.data,
    });
  };
};

export const editInventoryStock = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/assetstocks/${id}`, formValues);
    dispatch({
      type: EDIT_INVENTORYSTOCK,
      payload: response.data.data.data,
    });
  };
};

export const deleteInventoryStock = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/assetstocks/${id}`);
    dispatch({ type: DELETE_INVENTORYSTOCK, payload: id });
  };
};

// //////////////////////// STOCK REQUISITION ///////////////////////////

// export const createStockRequisition = (formValues, token) => {
//   data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//   return async (dispatch) => {
//     const response = await data.post("/assetrequisitions", formValues);

//     dispatch({
//       type: CREATE_STOCKREQUISITION,
//       payload: response.data.data.data,
//     });
//   };
// };

// export const fetchStockRequisitions = (tokens) => {
//   data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
//   return async (dispatch) => {
//     const response = await data.get("/assetrequisitions");

//     dispatch({
//       type: FETCH_STOCKREQUISITIONS,
//       payload: response.data.data.data,
//     });
//   };
// };

// export const fetchStockRequisition = (id, token) => {
//   data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//   return async (dispatch) => {
//     const response = await data.get(`/assetrequisitions/${id}`);
//     dispatch({
//       type: FETCH_STOCKREQUISITION,
//       payload: response.data.data.data,
//     });
//   };
// };

// export const editStockRequisition = (id, formValues, token) => {
//   data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//   return async (dispatch) => {
//     const response = await data.patch(`/assetrequisitions/${id}`, formValues);
//     dispatch({
//       type: EDIT_STOCKREQUISITION,
//       payload: response.data.data.data,
//     });
//   };
// };

// export const deleteStockRequisition = (id, token) => {
//   data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//   return async (dispatch) => {
//     await data.delete(`/assetrequisitions/${id}`);
//     dispatch({ type: DELETE_STOCKREQUISITION, payload: id });
//   };
// };

////////////////////////UNAPPROVED STOCK RETIREMENT ///////////////////////////

export const fetchUnapprovedStockRetirements = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/assetstocks");

    dispatch({
      type: FETCH_UNAPPROVEDSTOCKRETIREMENTS,
      payload: response.data.data.data,
    });
  };
};

export const fetchUnapprovedStockRetirement = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/assetstocks/${id}`);
    dispatch({
      type: FETCH_UNAPPROVEDSTOCKRETIREMENT,
      payload: response.data.data.data,
    });
  };
};

export const editUnapprovedStockRetirement = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/assetstocks/${id}`, formValues);
    dispatch({
      type: EDIT_UNAPPROVEDSTOCKRETIREMENT,
      payload: response.data.data.data,
    });
  };
};

export const deleteUnapprovedStockRetirement = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/assetstocks/${id}`);
    dispatch({ type: DELETE_UNAPPROVEDSTOCKRETIREMENT, payload: id });
  };
};

////////////////////////UNAPPROVED STOCK DISPOSAL ///////////////////////////

export const fetchUnapprovedStockDisposals = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/assetstocks");

    dispatch({
      type: FETCH_UNAPPROVEDSTOCKDISPOSITIONS,
      payload: response.data.data.data,
    });
  };
};

export const fetchUnapprovedStockDisposal = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/assetstocks/${id}`);
    dispatch({
      type: FETCH_UNAPPROVEDSTOCKDISPOSITION,
      payload: response.data.data.data,
    });
  };
};

export const editUnapprovedStockDisposal = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/assetstocks/${id}`, formValues);
    dispatch({
      type: EDIT_UNAPPROVEDSTOCKDISPOSITION,
      payload: response.data.data.data,
    });
  };
};

export const deleteUnapprovedStockDisposal = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/assetstocks/${id}`);
    dispatch({ type: DELETE_UNAPPROVEDSTOCKDISPOSITION, payload: id });
  };
};

/////////////////////////////////////////INVENTORY TRANSFERS & LEASE ///////////////////

export const fetchUnapprovedStockTransfers = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/assetstocks");

    dispatch({
      type: FETCH_UNAPPROVEDSTOCKTRANSFERS,
      payload: response.data.data.data,
    });
  };
};

export const fetchUnapprovedStockTransfer = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/assetstocks/${id}`);
    dispatch({
      type: FETCH_UNAPPROVEDSTOCKTRANSFER,
      payload: response.data.data.data,
    });
  };
};

export const editUnapprovedStockTransfer = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/assetstocks/${id}`, formValues);
    dispatch({
      type: EDIT_UNAPPROVEDSTOCKTRANSFER,
      payload: response.data.data.data,
    });
  };
};

export const deleteUnapprovedStockTransfer = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/assetstocks/${id}`);
    dispatch({ type: DELETE_UNAPPROVEDSTOCKTRANSFER, payload: id });
  };
};

/////////////////////////////////////////ASSET REQUISITIONS ACTION CREATORS ///////////////////

export const createAssetRequisition = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/assetrequisitions", formValues);

    dispatch({
      type: CREATE_ASSETREQUISITION,
      payload: response.data.data.data,
    });
  };
};

export const fetchAssetRequisitions = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/assetrequisitions");

    dispatch({
      type: FETCH_ASSETREQUISITIONS,
      payload: response.data.data.data,
    });
  };
};

export const fetchAssetRequisition = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/assetrequisitions/${id}`);
    dispatch({
      type: FETCH_ASSETREQUISITION,
      payload: response.data.data.data,
    });
  };
};

export const editAssetRequisition = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/assetrequisitions/${id}`, formValues);
    dispatch({
      type: EDIT_ASSETREQUISITION,
      payload: response.data.data.data,
    });
  };
};

export const deleteAssetRequisition = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/assetrequisitions/${id}`);
    dispatch({ type: DELETE_ASSETREQUISITION, payload: id });
  };
};

/////////////////////////////////////////PENDING ASSET REQUISITIONS ACTION CREATORS ///////////////////

export const fetchPendingAssetRequisitions = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/assetrequisitions");

    dispatch({
      type: FETCH_PENDINGASSETREQUISITIONS,
      payload: response.data.data.data,
    });
  };
};

export const fetchPendingAssetRequisition = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/assetrequisitions/${id}`);
    dispatch({
      type: FETCH_PENDINGASSETREQUISITION,
      payload: response.data.data.data,
    });
  };
};

export const editPendingAssetRequisition = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/assetrequisitions/${id}`, formValues);
    dispatch({
      type: EDIT_PENDINGASSETREQUISITION,
      payload: response.data.data.data,
    });
  };
};

export const deletePendingAssetRequisition = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/assetrequisitions/${id}`);
    dispatch({ type: DELETE_PENDINGASSETREQUISITION, payload: id });
  };
};

/////////////////////////////////////////WITHDRAWN ASSET REQUISITIONS ACTION CREATORS ///////////////////

export const fetchWithdrawnAssetRequisitions = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/assetrequisitions");

    dispatch({
      type: FETCH_WITHDRAWNASSETREQUISITIONS,
      payload: response.data.data.data,
    });
  };
};

export const fetchWithdrawnAssetRequisition = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/assetrequisitions/${id}`);
    dispatch({
      type: FETCH_WITHDRAWNASSETREQUISITION,
      payload: response.data.data.data,
    });
  };
};

export const editWithdrawnAssetRequisition = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/assetrequisitions/${id}`, formValues);
    dispatch({
      type: EDIT_WITHDRAWNASSETREQUISITION,
      payload: response.data.data.data,
    });
  };
};

export const deleteWithdrawnAssetRequisition = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/assetrequisitions/${id}`);
    dispatch({ type: DELETE_WITHDRAWNASSETREQUISITION, payload: id });
  };
};

/////////////////////////////////////////ABORTED ASSET REQUISITIONS ACTION CREATORS ///////////////////

export const fetchAbortedAssetRequisitions = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/assetrequisitions");

    dispatch({
      type: FETCH_ABORTEDASSETREQUISITIONS,
      payload: response.data.data.data,
    });
  };
};

export const fetchAbortedAssetRequisition = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/assetrequisitions/${id}`);
    dispatch({
      type: FETCH_ABORTEDASSETREQUISITION,
      payload: response.data.data.data,
    });
  };
};

export const editAbortedAssetRequisition = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/assetrequisitions/${id}`, formValues);
    dispatch({
      type: EDIT_ABORTEDASSETREQUISITION,
      payload: response.data.data.data,
    });
  };
};

export const deleteAbortedAssetRequisition = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/assetrequisitions/${id}`);
    dispatch({ type: DELETE_ABORTEDASSETREQUISITION, payload: id });
  };
};

/////////////////////////////////////////RETURN ASSET POST REQUISITIONS ACTION CREATORS ///////////////////

export const fetchReturnAssetPostRequisitions = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/assetrequisitions");

    dispatch({
      type: FETCH_RETURNASSETPOSTREQUISITIONS,
      payload: response.data.data.data,
    });
  };
};

export const fetchReturnAssetPostRequisition = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/assetrequisitions/${id}`);
    dispatch({
      type: FETCH_RETURNASSETPOSTREQUISITION,
      payload: response.data.data.data,
    });
  };
};

export const editReturnAssetPostRequisition = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/assetrequisitions/${id}`, formValues);
    dispatch({
      type: EDIT_RETURNASSETPOSTREQUISITION,
      payload: response.data.data.data,
    });
  };
};

export const deleteReturnAssetPostRequisition = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/assetrequisitions/${id}`);
    dispatch({ type: DELETE_RETURNASSETPOSTREQUISITION, payload: id });
  };
};

///////////////////////////////////////// ASSET RETIREMENT ACTION CREATORS ///////////////////

export const createAssetRetirement = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/assetretirements", formValues);

    dispatch({
      type: CREATE_ASSETRETIREMENT,
      payload: response.data.data.data,
    });
  };
};

export const fetchAssetRetirements = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/assetretirements");

    dispatch({
      type: FETCH_ASSETRETIREMENTS,
      payload: response.data.data.data,
    });
  };
};

export const fetchAssetRetirement = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/assetretirements/${id}`);
    dispatch({
      type: FETCH_ASSETRETIREMENT,
      payload: response.data.data.data,
    });
  };
};

export const editAssetRetirement = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/assetretirements/${id}`, formValues);
    dispatch({
      type: EDIT_ASSETRETIREMENT,
      payload: response.data.data.data,
    });
  };
};

export const deleteAssetRetirement = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/assetretirements/${id}`);
    dispatch({ type: DELETE_ASSETRETIREMENT, payload: id });
  };
};

///////////////////////////////////////// ASSET PENDING RETIREMENT ACTION CREATORS ///////////////////

export const fetchPendingAssetRetirements = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/assetretirements");

    dispatch({
      type: FETCH_PENDINGASSETRETIREMENTS,
      payload: response.data.data.data,
    });
  };
};

export const fetchPendingAssetRetirement = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/assetretirements/${id}`);
    dispatch({
      type: FETCH_PENDINGASSETRETIREMENT,
      payload: response.data.data.data,
    });
  };
};

export const editPendingAssetRetirement = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/assetretirements/${id}`, formValues);
    dispatch({
      type: EDIT_PENDINGASSETRETIREMENT,
      payload: response.data.data.data,
    });
  };
};

export const deletePendingAssetRetirement = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/assetretirements/${id}`);
    dispatch({ type: DELETE_PENDINGASSETRETIREMENT, payload: id });
  };
};

///////////////////////////////////////// ASSET WITHDRAWN RETIREMENT ACTION CREATORS ///////////////////

export const fetchWithdrawnAssetRetirements = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/assetretirements");

    dispatch({
      type: FETCH_WITHDRAWNASSETRETIREMENTS,
      payload: response.data.data.data,
    });
  };
};

export const fetchWithdrawnAssetRetirement = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/assetretirements/${id}`);
    dispatch({
      type: FETCH_WITHDRAWNASSETRETIREMENT,
      payload: response.data.data.data,
    });
  };
};

export const editWithdrawnAssetRetirement = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/assetretirements/${id}`, formValues);
    dispatch({
      type: EDIT_WITHDRAWNASSETRETIREMENT,
      payload: response.data.data.data,
    });
  };
};

export const deleteWithdrawnAssetRetirement = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/assetretirements/${id}`);
    dispatch({ type: DELETE_WITHDRAWNASSETRETIREMENT, payload: id });
  };
};

///////////////////////////////////////// RETURN POST ASSET  RETIREMENT ACTION CREATORS ///////////////////

export const fetchReturnAssetPostRetirements = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/assetretirements");

    dispatch({
      type: FETCH_RETURNPOSTASSETRETIREMENTS,
      payload: response.data.data.data,
    });
  };
};

export const fetchReturnAssetPostRetirement = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/assetretirements/${id}`);
    dispatch({
      type: FETCH_RETURNPOSTASSETRETIREMENT,
      payload: response.data.data.data,
    });
  };
};

export const editReturnAssetPostRetirement = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/assetretirements/${id}`, formValues);
    dispatch({
      type: EDIT_RETURNPOSTASSETRETIREMENT,
      payload: response.data.data.data,
    });
  };
};

export const deleteReturnAssetPostRetirement = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/assetretirements/${id}`);
    dispatch({ type: DELETE_RETURNPOSTASSETRETIREMENT, payload: id });
  };
};

///////////////////////////////////////// ASSET  DISPOSITION ACTION CREATORS ///////////////////

export const createAssetDisposition = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/assetdispositions", formValues);

    dispatch({
      type: CREATE_ASSETDISPOSITION,
      payload: response.data.data.data,
    });
  };
};

export const fetchAssetDispostions = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/assetdispositions");

    dispatch({
      type: FETCH_ASSETDISPOSITIONS,
      payload: response.data.data.data,
    });
  };
};

export const fetchAssetDispostion = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/assetdispositions/${id}`);
    dispatch({
      type: FETCH_ASSETDISPOSITION,
      payload: response.data.data.data,
    });
  };
};

export const editAssetDisposition = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/assetdispositions/${id}`, formValues);
    dispatch({
      type: EDIT_ASSETDISPOSITION,
      payload: response.data.data.data,
    });
  };
};

export const deleteAssetDisposition = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/assetdispositions/${id}`);
    dispatch({ type: DELETE_ASSETDISPOSITION, payload: id });
  };
};

///////////////////////////////////////// ASSET  PENDING DISPOSITION ACTION CREATORS ///////////////////

export const fetchPendingAssetDispostions = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/assetdispositions");

    dispatch({
      type: FETCH_PENDINGASSETDISPOSITIONS,
      payload: response.data.data.data,
    });
  };
};

export const fetchPendingAssetDispostion = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/assetdispositions/${id}`);
    dispatch({
      type: FETCH_PENDINGASSETDISPOSITION,
      payload: response.data.data.data,
    });
  };
};

export const editPendingAssetDisposition = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/assetdispositions/${id}`, formValues);
    dispatch({
      type: EDIT_PENDINGASSETDISPOSITION,
      payload: response.data.data.data,
    });
  };
};

export const deletePendingAssetDisposition = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/assetdispositions/${id}`);
    dispatch({ type: DELETE_PENDINGASSETDISPOSITION, payload: id });
  };
};

///////////////////////////////////////// ASSET  WITHDRAWN DISPOSITION ACTION CREATORS ///////////////////

export const fetchWithdrawnAssetDispostions = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/assetdispositions");

    dispatch({
      type: FETCH_WITHDRAWNASSETDISPOSITIONS,
      payload: response.data.data.data,
    });
  };
};

export const fetchWithdrawnAssetDispostion = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/assetdispositions/${id}`);
    dispatch({
      type: FETCH_WITHDRAWNASSETDISPOSITION,
      payload: response.data.data.data,
    });
  };
};

export const editWithdrawnAssetDisposition = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/assetdispositions/${id}`, formValues);
    dispatch({
      type: EDIT_WITHDRAWNASSETDISPOSITION,
      payload: response.data.data.data,
    });
  };
};

export const deleteWithdrawnAssetDisposition = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/assetdispositions/${id}`);
    dispatch({ type: DELETE_WITHDRAWNASSETDISPOSITION, payload: id });
  };
};

///////////////////////////////////////// ASSET RETURN POST DISPOSITION ACTION CREATORS ///////////////////

export const fetchReturnAssetPostDispositions = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/assetdispositions");

    dispatch({
      type: FETCH_RETURNASSETPOSTDISPOSITIONS,
      payload: response.data.data.data,
    });
  };
};

export const fetchReturnAssetPostDisposition = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/assetdispositions/${id}`);
    dispatch({
      type: FETCH_RETURNASSETPOSTDISPOSITION,
      payload: response.data.data.data,
    });
  };
};

export const editReturnAssetPostDisposition = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/assetdispositions/${id}`, formValues);
    dispatch({
      type: EDIT_RETURNASSETPOSTDISPOSITION,
      payload: response.data.data.data,
    });
  };
};

export const deleteReturnAssetPostDisposition = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/assetdispositions/${id}`);
    dispatch({ type: DELETE_RETURNASSETPOSTDISPOSITION, payload: id });
  };
};

//////////////////////////////////// ASSET MOVEMENTS ////////////////////

export const createAssetMovements = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/assetmovements", formValues);

    dispatch({
      type: CREATE_ASSETMOVEMENT,
      payload: response.data.data.data,
    });
  };
};

export const fetchAssetMovements = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/assetmovements");

    dispatch({
      type: FETCH_ASSETMOVEMENTS,
      payload: response.data.data.data,
    });
  };
};

export const fetchAssetMovement = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/assetmovements/${id}`);
    dispatch({
      type: FETCH_ASSETMOVEMENT,
      payload: response.data.data.data,
    });
  };
};

export const editAssetMovement = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/assetmovements/${id}`, formValues);
    dispatch({
      type: EDIT_ASSETMOVEMENT,
      payload: response.data.data.data,
    });
  };
};

export const deleteAssetMovement = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/assetmovements/${id}`);
    dispatch({ type: DELETE_ASSETMOVEMENT, payload: id });
  };
};

//////////////////////////////////// ASSET TRANSFER MOVEMENTS ////////////////////

export const createTransferAssetMovements = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/assettransfers", formValues);

    dispatch({
      type: CREATE_TRANSFERASSETMOVEMENT,
      payload: response.data.data.data,
    });
  };
};

export const fetchTransferAssetMovements = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/assettransfers");

    dispatch({
      type: FETCH_TRANSFERASSETMOVEMENTS,
      payload: response.data.data.data,
    });
  };
};

export const fetchTransferAssetMovement = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/assettransfers/${id}`);
    dispatch({
      type: FETCH_TRANSFERASSETMOVEMENT,
      payload: response.data.data.data,
    });
  };
};

export const editTransferAssetMovement = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/assettransfers/${id}`, formValues);
    dispatch({
      type: EDIT_TRANSFERASSETMOVEMENT,
      payload: response.data.data.data,
    });
  };
};

export const deleteTransferAssetMovement = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/assettransfers/${id}`);
    dispatch({ type: DELETE_TRANSFERASSETMOVEMENT, payload: id });
  };
};

//////////////////////////////////// ASSET PENDING TRANSFER MOVEMENTS ////////////////////

export const createPendingTransferAssetMovements = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/assettransfers", formValues);

    dispatch({
      type: CREATE_PENDINGTRANSFERASSETMOVEMENT,
      payload: response.data.data.data,
    });
  };
};

export const fetchPendingTransferAssetMovements = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/assettransfers");

    dispatch({
      type: FETCH_PENDINGTRANSFERASSETMOVEMENTS,
      payload: response.data.data.data,
    });
  };
};

export const fetchPendingTransferAssetMovement = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/assettransfers/${id}`);
    dispatch({
      type: FETCH_PENDINGTRANSFERASSETMOVEMENT,
      payload: response.data.data.data,
    });
  };
};

export const editPendingTransferAssetMovement = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/assettransfers/${id}`, formValues);
    dispatch({
      type: EDIT_PENDINGTRANSFERASSETMOVEMENT,
      payload: response.data.data.data,
    });
  };
};

export const deletePendingTransferAssetMovement = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/assettransfers/${id}`);
    dispatch({ type: DELETE_PENDINGTRANSFERASSETMOVEMENT, payload: id });
  };
};

//////////////////////////////////// ASSET WITHDRAWN TRANSFER MOVEMENTS ////////////////////

export const createWithdrawnTransferAssetMovements = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/assettransfers", formValues);

    dispatch({
      type: CREATE_WITHDRAWNTRANSFERASSETMOVEMENT,
      payload: response.data.data.data,
    });
  };
};

export const fetchWithdrawnTransferAssetMovements = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/assettransfers");

    dispatch({
      type: FETCH_WITHDRAWNTRANSFERASSETMOVEMENTS,
      payload: response.data.data.data,
    });
  };
};

export const fetchWithdrawnTransferAssetMovement = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/assettransfers/${id}`);
    dispatch({
      type: FETCH_WITHDRAWNTRANSFERASSETMOVEMENT,
      payload: response.data.data.data,
    });
  };
};

export const editWithdrawnTransferAssetMovement = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/assettransfers/${id}`, formValues);
    dispatch({
      type: EDIT_WITHDRAWNTRANSFERASSETMOVEMENT,
      payload: response.data.data.data,
    });
  };
};

export const deleteWithdrawnTransferAssetMovement = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/assettransfers/${id}`);
    dispatch({ type: DELETE_WITHDRAWNTRANSFERASSETMOVEMENT, payload: id });
  };
};

//////////////////////////////////// ASSET RETURN TRANSFER MOVEMENTS ////////////////////

export const createReturnAssetPostTransferMovements = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/assettransfers", formValues);

    dispatch({
      type: CREATE_RETURNASSETPOSTTRANSFERMOVEMENT,
      payload: response.data.data.data,
    });
  };
};

export const fetchReturnAssetPostTransferMovements = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/assettransfers");

    dispatch({
      type: FETCH_RETURNASSETPOSTTRANSFERMOVEMENTS,
      payload: response.data.data.data,
    });
  };
};

export const fetchReturnAssetPostTransferMovement = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/assettransfers/${id}`);
    dispatch({
      type: FETCH_RETURNASSETPOSTTRANSFERMOVEMENT,
      payload: response.data.data.data,
    });
  };
};

export const editReturnAssetPostTransferMovement = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/assettransfers/${id}`, formValues);
    dispatch({
      type: EDIT_RETURNASSETPOSTTRANSERMOVEMENT,
      payload: response.data.data.data,
    });
  };
};

export const deleteReturnAssetPostTransferMovement = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/assettransfers/${id}`);
    dispatch({ type: DELETE_RETURNASSETPOSTTRANSFERMOVEMENT, payload: id });
  };
};

/////////////////////////////////// ASSET STORES ////////////////////

export const createAssetStore = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/stores", formValues);

    dispatch({
      type: CREATE_ASSETSTORE,
      payload: response.data.data.data,
    });
  };
};

export const fetchAssetStores = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/stores");

    dispatch({
      type: FETCH_ASSETSTORES,
      payload: response.data.data.data,
    });
  };
};

export const fetchAssetStore = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/stores/${id}`);
    dispatch({
      type: FETCH_ASSETSTORE,
      payload: response.data.data.data,
    });
  };
};

export const editAssetStore = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/stores/${id}`, formValues);
    dispatch({
      type: EDIT_ASSETSTORE,
      payload: response.data.data.data,
    });
  };
};

export const deleteAssetStore = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/stores/${id}`);
    dispatch({ type: DELETE_ASSETSTORE, payload: id });
  };
};

/////////////////////////////////// MAINTENANCE ASSET STORES ////////////////////

export const createMaintenanceAssetStore = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/storemaintenances", formValues);

    dispatch({
      type: CREATE_MAINTENANCEASSETSTORE,
      payload: response.data.data.data,
    });
  };
};

export const fetchMaintenanceAssetStores = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/storemaintenances");

    dispatch({
      type: FETCH_MAINTENANCEASSETSTORES,
      payload: response.data.data.data,
    });
  };
};

export const fetchMaintenanceAssetStore = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/storemaintenances/${id}`);
    dispatch({
      type: FETCH_MAINTENANCEASSETSTORE,
      payload: response.data.data.data,
    });
  };
};

export const editMaintenanceAssetStore = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/storemaintenances/${id}`, formValues);
    dispatch({
      type: EDIT_MAINTENANCEASSETSTORE,
      payload: response.data.data.data,
    });
  };
};

export const deleteMaintenanceAssetStore = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/storemaintenances/${id}`);
    dispatch({ type: DELETE_MAINTENANCEASSETSTORE, payload: id });
  };
};

/////////////////////////////////// LEASE ASSET STORES ////////////////////

export const createLeaseAssetStore = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/storeleases", formValues);

    dispatch({
      type: CREATE_LEASEASSETSTORE,
      payload: response.data.data.data,
    });
  };
};

export const fetchLeaseAssetStores = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/storeleases");

    dispatch({
      type: FETCH_LEASEASSETSTORES,
      payload: response.data.data.data,
    });
  };
};

export const fetchLeaseAssetStore = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/storeleases/${id}`);
    dispatch({
      type: FETCH_LEASEASSETSTORE,
      payload: response.data.data.data,
    });
  };
};

export const editLeaseAssetStore = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/storeleases/${id}`, formValues);
    dispatch({
      type: EDIT_LEASEASSETSTORE,
      payload: response.data.data.data,
    });
  };
};

export const deleteLeaseAssetStore = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/storeleases/${id}`);
    dispatch({ type: DELETE_LEASEASSETSTORE, payload: id });
  };
};

/////////////////////////////////// OWNERSHIP ASSET STORES ////////////////////

export const createOwnershipAssetStore = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/storechangeownerships", formValues);

    dispatch({
      type: CREATE_OWNERSHIPASSETSTORE,
      payload: response.data.data.data,
    });
  };
};

export const fetchOwnershipAssetStores = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/storechangeownerships");

    dispatch({
      type: FETCH_OWNERSHIPASSETSTORES,
      payload: response.data.data.data,
    });
  };
};

export const fetchOwnershipAssetStore = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/storechangeownerships/${id}`);
    dispatch({
      type: FETCH_OWNERSHIPASSETSTORE,
      payload: response.data.data.data,
    });
  };
};

export const editOwnershipAssetStore = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(
      `/storechangeownerships/${id}`,
      formValues
    );
    dispatch({
      type: EDIT_OWNERSHIPASSETSTORE,
      payload: response.data.data.data,
    });
  };
};

export const deleteOwnershipAssetStore = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/storechangeownerships/${id}`);
    dispatch({ type: DELETE_OWNERSHIPASSETSTORE, payload: id });
  };
};

/////////////////////////////////// ASSET STORES SPACE ALLOCATION ////////////////////

export const createAssetStoreSpaceAllocation = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/storespaceallocations", formValues);

    dispatch({
      type: CREATE_ASSETSTORESPACEALLOCATION,
      payload: response.data.data.data,
    });
  };
};

export const fetchAssetStoreSpaceAllocations = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/storespaceallocations");

    dispatch({
      type: FETCH_ASSETSTORESPACEALLOCATIONS,
      payload: response.data.data.data,
    });
  };
};

export const fetchAssetStoreSpaceAllocation = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/storespaceallocations/${id}`);
    dispatch({
      type: FETCH_ASSETSTORESPACEALLOCATION,
      payload: response.data.data.data,
    });
  };
};

export const editAssetStoreSpaceAllocation = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(
      `/storespaceallocations/${id}`,
      formValues
    );
    dispatch({
      type: EDIT_ASSETSTORESPACEALLOCATION,
      payload: response.data.data.data,
    });
  };
};

export const deleteAssetStoreSpaceAllocation = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/storespaceallocations/${id}`);
    dispatch({ type: DELETE_ASSETSTORESPACEALLOCATION, payload: id });
  };
};

////////////////////////////////// SELL ASSET STORES ////////////////////

export const createSellAssetStore = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/storesales", formValues);

    dispatch({
      type: CREATE_SELLASSETSTORE,
      payload: response.data.data.data,
    });
  };
};

export const fetchSellAssetStores = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/storesales");

    dispatch({
      type: FETCH_SELLASSETSTORES,
      payload: response.data.data.data,
    });
  };
};

export const fetchSellAssetStore = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/storesales/${id}`);
    dispatch({
      type: FETCH_SELLASSETSTORE,
      payload: response.data.data.data,
    });
  };
};

export const editSellAssetStore = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/storesales/${id}`, formValues);
    dispatch({
      type: EDIT_SELLASSETSTORE,
      payload: response.data.data.data,
    });
  };
};

export const deleteSellAssetStore = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/storesales/${id}`);
    dispatch({ type: DELETE_SELLASSETSTORE, payload: id });
  };
};

//////////////////////////////////  ASSET STORES CLOSURE ////////////////////

export const createAssetStoreClosure = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/stores", formValues);

    dispatch({
      type: CREATE_ASSETSTORECLOSURE,
      payload: response.data.data.data,
    });
  };
};

export const fetchAssetStoreClosures = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/stores");

    dispatch({
      type: FETCH_ASSETSTORECLOSURES,
      payload: response.data.data.data,
    });
  };
};

export const fetchAssetStoreClosure = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/stores/${id}`);
    dispatch({
      type: FETCH_ASSETSTORECLOSURE,
      payload: response.data.data.data,
    });
  };
};

export const editAssetStoreClosure = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/stores/${id}`, formValues);
    dispatch({
      type: EDIT_ASSETSTORECLOSURE,
      payload: response.data.data.data,
    });
  };
};

export const deleteAssetStoreClosure = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/stores/${id}`);
    dispatch({ type: DELETE_ASSETSTORECLOSURE, payload: id });
  };
};

//////////////////////////////////  STORE ASSET MOVEMENT TYPES  ////////////////////

export const createStoreAssetMovementType = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/movementtypes", formValues);

    dispatch({
      type: CREATE_STOREMOVEMENTTYPE,
      payload: response.data.data.data,
    });
  };
};

export const fetchStoreAssetMovementTypes = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/movementtypes");

    dispatch({
      type: FETCH_STOREMOVEMENTTYPES,
      payload: response.data.data.data,
    });
  };
};

export const fetchStoreAssetMovementType = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/movementtypes/${id}`);
    dispatch({
      type: FETCH_STOREMOVEMENTTYPE,
      payload: response.data.data.data,
    });
  };
};

export const editStoreAssetMovementType = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/movementtypes/${id}`, formValues);
    dispatch({
      type: EDIT_STOREMOVEMENTTYPE,
      payload: response.data.data.data,
    });
  };
};

export const deleteStoreAssetMovementType = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/movementtypes/${id}`);
    dispatch({ type: DELETE_STOREMOVEMENTTYPE, payload: id });
  };
};

//////////////////////////////////  STORE DISPOSITION TYPES  ////////////////////

export const createStoreAssetDispositionType = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/dispositiontypes", formValues);

    dispatch({
      type: CREATE_STOREDISPOSITIONTYPE,
      payload: response.data.data.data,
    });
  };
};

export const fetchStoreAssetDispositionTypes = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/dispositiontypes");

    dispatch({
      type: FETCH_STOREDISPOSITIONTYPES,
      payload: response.data.data.data,
    });
  };
};

export const fetchStoreAssetDispositionType = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/dispositiontypes/${id}`);
    dispatch({
      type: FETCH_STOREDISPOSITIONTYPE,
      payload: response.data.data.data,
    });
  };
};

export const editStoreAssetDispositionType = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/dispositiontypes/${id}`, formValues);
    dispatch({
      type: EDIT_STOREDISPOSITIONTYPE,
      payload: response.data.data.data,
    });
  };
};

export const deleteStoreAssetDispositionType = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/dispositiontypes/${id}`);
    dispatch({ type: DELETE_STOREDISPOSITIONTYPE, payload: id });
  };
};

//////////////////////////////////  STORE MAINTENANCE TYPES  ////////////////////

export const createStoreMaintenanceType = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/storemaintenancetypes", formValues);

    dispatch({
      type: CREATE_STOREMAINTENANCETYPE,
      payload: response.data.data.data,
    });
  };
};

export const fetchStoreMaintenanceTypes = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/storemaintenancetypes");

    dispatch({
      type: FETCH_STOREMAINTENANCETYPES,
      payload: response.data.data.data,
    });
  };
};

export const fetchStoreMaintenanceType = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/storemaintenancetypes/${id}`);
    dispatch({
      type: FETCH_STOREMAINTENANCETYPE,
      payload: response.data.data.data,
    });
  };
};

export const editStoreMaintenanceType = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(
      `/storemaintenancetypes/${id}`,
      formValues
    );
    dispatch({
      type: EDIT_STOREMAINTENANCETYPE,
      payload: response.data.data.data,
    });
  };
};

export const deleteStoreMaintenanceType = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/storemaintenancetypes/${id}`);
    dispatch({ type: DELETE_STOREMAINTENANCETYPE, payload: id });
  };
};

//////////////////////////////////  TRANSFORMATION TYPES  ////////////////////

export const createTransformationType = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/operationprocessingtypes", formValues);

    dispatch({
      type: CREATE_TRANSFORMATIONTYPE,
      payload: response.data.data.data,
    });
  };
};

export const fetchTransformationTypes = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/operationprocessingtypes");

    dispatch({
      type: FETCH_TRANSFORMATIONTYPES,
      payload: response.data.data.data,
    });
  };
};

export const fetchTransformationType = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/operationprocessingtypes/${id}`);
    dispatch({
      type: FETCH_TRANSFORMATIONTYPE,
      payload: response.data.data.data,
    });
  };
};

export const editTransformationType = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(
      `/operationprocessingtypes/${id}`,
      formValues
    );
    dispatch({
      type: EDIT_TRANSFORMATIONTYPE,
      payload: response.data.data.data,
    });
  };
};

export const deleteTransformationType = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/operationprocessingtypes/${id}`);
    dispatch({ type: DELETE_TRANSFORMATIONTYPE, payload: id });
  };
};

//////////////////////////////////  TRANSFORMATION PHASES  ////////////////////

export const createTransformationPhase = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/operationprocessingphases", formValues);

    dispatch({
      type: CREATE_TRANSFORMATIONPHASE,
      payload: response.data.data.data,
    });
  };
};

export const fetchTransformationPhases = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/operationprocessingphases");

    dispatch({
      type: FETCH_TRANSFORMATIONPHASES,
      payload: response.data.data.data,
    });
  };
};

export const fetchTransformationPhase = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/operationprocessingphases/${id}`);
    dispatch({
      type: FETCH_TRANSFORMATIONPHASE,
      payload: response.data.data.data,
    });
  };
};

export const editTransformationPhase = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(
      `/operationprocessingphases/${id}`,
      formValues
    );
    dispatch({
      type: EDIT_TRANSFORMATIONPHASE,
      payload: response.data.data.data,
    });
  };
};

export const deleteTransformationPhase = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/operationprocessingphases/${id}`);
    dispatch({ type: DELETE_TRANSFORMATIONPHASE, payload: id });
  };
};

//////////////////////////////////  TRANSFORMATION PHASE EVENTS  ////////////////////

export const createTransformationPhaseEvent = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post(
      "/operationprocessingphaseevents",
      formValues
    );

    dispatch({
      type: CREATE_TRANSFORMATIONPHASEEVENT,
      payload: response.data.data.data,
    });
  };
};

export const fetchTransformationPhaseEvents = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/operationprocessingphaseevents");

    dispatch({
      type: FETCH_TRANSFORMATIONPHASEEVENTS,
      payload: response.data.data.data,
    });
  };
};

export const fetchTransformationPhaseEvent = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/operationprocessingphaseevents/${id}`);
    dispatch({
      type: FETCH_TRANSFORMATIONPHASEEVENT,
      payload: response.data.data.data,
    });
  };
};

export const editTransformationPhaseEvent = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(
      `/operationprocessingphaseevents/${id}`,
      formValues
    );
    dispatch({
      type: EDIT_TRANSFORMATIONPHASEEVENT,
      payload: response.data.data.data,
    });
  };
};

export const deleteTransformationPhaseEvent = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/operationprocessingphaseevents/${id}`);
    dispatch({ type: DELETE_TRANSFORMATIONPHASEEVENT, payload: id });
  };
};

//////////////////////////////////  FINISHING TYPES  ////////////////////

export const createFinishingType = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/operationfinishingtypes", formValues);

    dispatch({
      type: CREATE_FINISHINGTYPE,
      payload: response.data.data.data,
    });
  };
};

export const fetchFinishingTypes = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/operationfinishingtypes");

    dispatch({
      type: FETCH_FINISHINGTYPES,
      payload: response.data.data.data,
    });
  };
};

export const fetchFinishingType = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/operationfinishingtypes/${id}`);
    dispatch({
      type: FETCH_FINISHINGTYPE,
      payload: response.data.data.data,
    });
  };
};

export const editFinishingType = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(
      `/operationfinishingtypes/${id}`,
      formValues
    );
    dispatch({
      type: EDIT_FINISHINGTYPE,
      payload: response.data.data.data,
    });
  };
};

export const deleteFinishingType = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/operationfinishingtypes/${id}`);
    dispatch({ type: DELETE_FINISHINGTYPE, payload: id });
  };
};

//////////////////////////////////  QUALITY ASSURANCE TYPES  ////////////////////

export const createQualityAssuranceType = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post(
      "/operationqualityassurancetypes",
      formValues
    );

    dispatch({
      type: CREATE_QUALITYASSURANCETYPE,
      payload: response.data.data.data,
    });
  };
};

export const fetchQualityAssuranceTypes = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/operationqualityassurancetypes");

    dispatch({
      type: FETCH_QUALITYASSURANCETYPES,
      payload: response.data.data.data,
    });
  };
};

export const fetchQualityAssuranceType = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/operationqualityassurancetypes/${id}`);
    dispatch({
      type: FETCH_QUALITYASSURANCETYPE,
      payload: response.data.data.data,
    });
  };
};

export const editQualityAssuranceType = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(
      `/operationqualityassurancetypes/${id}`,
      formValues
    );
    dispatch({
      type: EDIT_QUALITYASSURANCETYPE,
      payload: response.data.data.data,
    });
  };
};

export const deleteQualityAssuranceType = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/operationqualityassurancetypes/${id}`);
    dispatch({ type: DELETE_QUALITYASSURANCETYPE, payload: id });
  };
};

//////////////////////////////////  QUALITY ASSURANCE PHASES  ////////////////////

export const createQualityAssurancePhase = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post(
      "/operationqualityassurancephases",
      formValues
    );

    dispatch({
      type: CREATE_QUALITYASSURANCEPHASE,
      payload: response.data.data.data,
    });
  };
};

export const fetchQualityAssurancePhases = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/operationqualityassurancephases");

    dispatch({
      type: FETCH_QUALITYASSURANCEPHASES,
      payload: response.data.data.data,
    });
  };
};

export const fetchQualityAssurancePhase = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/operationqualityassurancephases/${id}`);
    dispatch({
      type: FETCH_QUALITYASSURANCEPHASE,
      payload: response.data.data.data,
    });
  };
};

export const editQualityAssurancePhase = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(
      `/operationqualityassurancephases/${id}`,
      formValues
    );
    dispatch({
      type: EDIT_QUALITYASSURANCEPHASE,
      payload: response.data.data.data,
    });
  };
};

export const deleteQualityAssurancePhase = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/operationqualityassurancephases/${id}`);
    dispatch({ type: DELETE_QUALITYASSURANCEPHASE, payload: id });
  };
};

//////////////////////////////////  QUALITY ASSURANCE PHASE EVENT ////////////////////

export const createQualityAssurancePhaseEvent = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post(
      "/operationqualityassurancephaseevents",
      formValues
    );

    dispatch({
      type: CREATE_QUALITYASSURANCEPHASEEVENT,
      payload: response.data.data.data,
    });
  };
};

export const fetchQualityAssurancePhaseEvents = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/operationqualityassurancephaseevents");

    dispatch({
      type: FETCH_QUALITYASSURANCEPHASEEVENTS,
      payload: response.data.data.data,
    });
  };
};

export const fetchQualityAssurancePhaseEvent = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(
      `/operationqualityassurancephaseevents/${id}`
    );
    dispatch({
      type: FETCH_QUALITYASSURANCEPHASEEVENT,
      payload: response.data.data.data,
    });
  };
};

export const editQualityAssurancePhaseEvent = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(
      `/operationqualityassurancephaseevents/${id}`,
      formValues
    );
    dispatch({
      type: EDIT_QUALITYASSURANCEPHASEEVENT,
      payload: response.data.data.data,
    });
  };
};

export const deleteQualityAssurancePhaseEvent = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/operationqualityassurancephaseevents/${id}`);
    dispatch({ type: DELETE_QUALITYASSURANCEPHASEEVENT, payload: id });
  };
};

//////////////////////////////////  OPERATION MAINTENANCE TYPE ACTION TYPES ////////////////////

export const createOperationMaintenanceType = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/operationmaintenancetypes", formValues);

    dispatch({
      type: CREATE_OPERATIONMAINTENANCETYPE,
      payload: response.data.data.data,
    });
  };
};

export const fetchOperationMaintenanceTypes = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/operationmaintenancetypes");

    dispatch({
      type: FETCH_OPERATIONMAINTENANCETYPES,
      payload: response.data.data.data,
    });
  };
};

export const fetchOperationMaintenanceType = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/operationmaintenancetypes/${id}`);
    dispatch({
      type: FETCH_OPERATIONMAINTENANCETYPE,
      payload: response.data.data.data,
    });
  };
};

export const editOperationMaintenanceType = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(
      `/operationmaintenancetypes/${id}`,
      formValues
    );
    dispatch({
      type: EDIT_OPERATIONMAINTENANCETYPE,
      payload: response.data.data.data,
    });
  };
};

export const deleteOperationMaintenanceType = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/operationmaintenancetypes/${id}`);
    dispatch({ type: DELETE_OPERATIONMAINTENANCETYPE, payload: id });
  };
};

//////////////////////////////////  OPERATIONS ON FINISHING ////////////////////

export const createFinishing = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post(
      "/operationprocessingfinishings",
      formValues
    );

    dispatch({
      type: CREATE_FINISHING,
      payload: response.data.data.data,
    });
  };
};

export const fetchFinishings = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/operationprocessingfinishings");

    dispatch({
      type: FETCH_FINISHINGS,
      payload: response.data.data.data,
    });
  };
};

export const fetchFinishing = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/operationprocessingfinishings/${id}`);
    dispatch({
      type: FETCH_FINISHING,
      payload: response.data.data.data,
    });
  };
};

export const editFinishing = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(
      `/operationprocessingfinishings/${id}`,
      formValues
    );
    dispatch({
      type: EDIT_FINISHING,
      payload: response.data.data.data,
    });
  };
};

export const deleteFinishing = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/operationprocessingfinishings/${id}`);
    dispatch({ type: DELETE_FINISHING, payload: id });
  };
};

//////////////////////////////////  OPERATIONS ON  QUALITY ASSURANCE ////////////////////

export const createQualityAssurance = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post(
      "/operationprocessingqualityassurances",
      formValues
    );

    dispatch({
      type: CREATE_QUALITYASSURANCE,
      payload: response.data.data.data,
    });
  };
};

export const fetchQualityAssurances = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/operationprocessingqualityassurances");

    dispatch({
      type: FETCH_QUALITYASSURANCES,
      payload: response.data.data.data,
    });
  };
};

export const fetchQualityAssurance = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(
      `/operationprocessingqualityassurances/${id}`
    );
    dispatch({
      type: FETCH_QUALITYASSURANCE,
      payload: response.data.data.data,
    });
  };
};

export const editQualityAssurance = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(
      `/operationprocessingqualityassurances/${id}`,
      formValues
    );
    dispatch({
      type: EDIT_QUALITYASSURANCE,
      payload: response.data.data.data,
    });
  };
};

export const deleteQualityAssurance = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/operationprocessingqualityassurances/${id}`);
    dispatch({ type: DELETE_QUALITYASSURANCE, payload: id });
  };
};

/////////////////////////////////  OPERATIONS MAINTENANCE ////////////////////

export const createOperationMaintenance = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post(
      "/operationprocessingmaintenances",
      formValues
    );

    dispatch({
      type: CREATE_OPERATIONMAINTENANCE,
      payload: response.data.data.data,
    });
  };
};

export const fetchOperationMaintenances = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/operationprocessingmaintenances");

    dispatch({
      type: FETCH_OPERATIONMAINTENANCES,
      payload: response.data.data.data,
    });
  };
};

export const fetchOperationMaintenance = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/operationprocessingmaintenances/${id}`);
    dispatch({
      type: FETCH_OPERATIONMAINTENANCE,
      payload: response.data.data.data,
    });
  };
};

export const editOperationMaintenance = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(
      `/operationprocessingmaintenances/${id}`,
      formValues
    );
    dispatch({
      type: EDIT_OPERATIONMAINTENANCE,
      payload: response.data.data.data,
    });
  };
};

export const deleteOperationMaintenance = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/operationprocessingmaintenances/${id}`);
    dispatch({ type: DELETE_OPERATIONMAINTENANCE, payload: id });
  };
};

/////////////////////////////////  OPERATIONS PROCESSING ////////////////////

export const createOperationProcessing = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/operationprocessings", formValues);

    dispatch({
      type: CREATE_OPERATIONPROCESSING,
      payload: response.data.data.data,
    });
  };
};

export const fetchOperationProcessings = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/operationprocessings");

    dispatch({
      type: FETCH_OPERATIONPROCESSINGS,
      payload: response.data.data.data,
    });
  };
};

export const fetchOperationProcessing = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/operationprocessings/${id}`);
    dispatch({
      type: FETCH_OPERATIONPROCESSING,
      payload: response.data.data.data,
    });
  };
};

export const editOperationProcessing = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(
      `/operationprocessings/${id}`,
      formValues
    );
    dispatch({
      type: EDIT_OPERATIONPROCESSING,
      payload: response.data.data.data,
    });
  };
};

export const deleteOperationProcessing = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/operationprocessings/${id}`);
    dispatch({ type: DELETE_OPERATIONPROCESSING, payload: id });
  };
};

/////////////////////////////////  OPERATIONS OPERATIONS ////////////////////

export const createOperationOperation = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/operationoperations", formValues);

    dispatch({
      type: CREATE_OPERATIONOPERATION,
      payload: response.data.data.data,
    });
  };
};

export const fetchOperationOperations = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/operationoperations");

    dispatch({
      type: FETCH_OPERATIONOPERATIONS,
      payload: response.data.data.data,
    });
  };
};

export const fetchOperationOperation = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/operationoperations/${id}`);
    dispatch({
      type: FETCH_OPERATIONOPERATION,
      payload: response.data.data.data,
    });
  };
};

export const editOperationOperation = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/operationoperations/${id}`, formValues);
    dispatch({
      type: EDIT_OPERATIONOPERATION,
      payload: response.data.data.data,
    });
  };
};

export const deleteOperationOperation = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/operationoperations/${id}`);
    dispatch({ type: DELETE_OPERATIONOPERATION, payload: id });
  };
};

/////////////////////////////////  OPERATIONS PRODUCTION MAINTENANCE ////////////////////

export const createOperationProductionMaintenance = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post(
      "/operationproductionmaintenances",
      formValues
    );

    dispatch({
      type: CREATE_OPERATIONPRODUCTIONMAINTENANCE,
      payload: response.data.data.data,
    });
  };
};

export const fetchOperationProductionMaintenances = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/operationproductionmaintenances");

    dispatch({
      type: FETCH_OPERATIONPRODUCTIONMAINTENANCES,
      payload: response.data.data.data,
    });
  };
};

export const fetchOperationProductionMaintenance = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/operationproductionmaintenances/${id}`);
    dispatch({
      type: FETCH_OPERATIONPRODUCTIONMAINTENANCE,
      payload: response.data.data.data,
    });
  };
};

export const editOperationProductionMaintenance = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(
      `/operationproductionmaintenances/${id}`,
      formValues
    );
    dispatch({
      type: EDIT_OPERATIONPRODUCTIONMAINTENANCE,
      payload: response.data.data.data,
    });
  };
};

export const deleteOperationProductionMaintenance = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/operationproductionmaintenances/${id}`);
    dispatch({ type: DELETE_OPERATIONPRODUCTIONMAINTENANCE, payload: id });
  };
};

/////////////////////////////////  OPERATIONS PRODUCTION QUALITY ASSURANCE ////////////////////

export const createOperationProductionQualityAssurance = (
  formValues,
  token
) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post(
      "/operationproductionqualityassurances",
      formValues
    );

    dispatch({
      type: CREATE_PRODUCTIONQUALITYASSURANCE,
      payload: response.data.data.data,
    });
  };
};

export const fetchOperationProductionQualityAssurances = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/operationproductionqualityassurances");

    dispatch({
      type: FETCH_PRODUCTIONQUALITYASSURANCES,
      payload: response.data.data.data,
    });
  };
};

export const fetchOperationProductionQualityAssurance = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(
      `/operationproductionqualityassurances/${id}`
    );
    dispatch({
      type: FETCH_PRODUCTIONQUALITYASSURANCE,
      payload: response.data.data.data,
    });
  };
};

export const editOperationProductionQualityAssurance = (
  id,
  formValues,
  token
) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(
      `/operationproductionqualityassurances/${id}`,
      formValues
    );
    dispatch({
      type: EDIT_PRODUCTIONQUALITYASSURANCE,
      payload: response.data.data.data,
    });
  };
};

export const deleteOperationProductionQualityAssurance = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/operationproductionqualityassurances/${id}`);
    dispatch({ type: DELETE_PRODUCTIONQUALITYASSURANCE, payload: id });
  };
};

//////////////////////////////////  OPERATIONS ON PRODUCTION FINISHING ////////////////////

export const createProductionFinishing = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post(
      "/operationproductionfinishings",
      formValues
    );

    dispatch({
      type: CREATE_PRODUCTIONFINISHING,
      payload: response.data.data.data,
    });
  };
};

export const fetchProductionFinishings = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/operationproductionfinishings");

    dispatch({
      type: FETCH_PRODUCTIONFINISHINGS,
      payload: response.data.data.data,
    });
  };
};

export const fetchProductionFinishing = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/operationproductionfinishings/${id}`);
    dispatch({
      type: FETCH_PRODUCTIONFINISHING,
      payload: response.data.data.data,
    });
  };
};

export const editProductionFinishing = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(
      `/operationproductionfinishings/${id}`,
      formValues
    );
    dispatch({
      type: EDIT_PRODUCTIONFINISHING,
      payload: response.data.data.data,
    });
  };
};

export const deleteProductionFinishing = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/operationproductionfinishings/${id}`);
    dispatch({ type: DELETE_PRODUCTIONFINISHING, payload: id });
  };
};

//////////////////////////////////  PROJECT PROJECTS ////////////////////

export const createProject = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/projects", formValues);

    dispatch({
      type: CREATE_PROJECTPROJECT,
      payload: response.data.data.data,
    });
  };
};

export const fetchProjects = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/projects");

    dispatch({
      type: FETCH_PROJECTPROJECTS,
      payload: response.data.data.data,
    });
  };
};

export const fetchProject = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/projects/${id}`);
    dispatch({
      type: FETCH_PROJECTPROJECT,
      payload: response.data.data.data,
    });
  };
};

export const editProject = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/projects/${id}`, formValues);
    dispatch({
      type: EDIT_PROJECTPROJECT,
      payload: response.data.data.data,
    });
  };
};

export const deleteProject = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/projects/${id}`);
    dispatch({ type: DELETE_PROJECTPROJECT, payload: id });
  };
};

//////////////////////////////////  PROJECT PROJECTS RESOURCES ////////////////////

export const createProjectResource = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/projectresources", formValues);

    dispatch({
      type: CREATE_PROJECTPROJECTRESOURCE,
      payload: response.data.data.data,
    });
  };
};

export const fetchProjectResources = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/projectresources");

    dispatch({
      type: FETCH_PROJECTPROJECTRESOURCES,
      payload: response.data.data.data,
    });
  };
};

export const fetchProjectResource = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/projectresources/${id}`);
    dispatch({
      type: FETCH_PROJECTPROJECTRESOURCE,
      payload: response.data.data.data,
    });
  };
};

export const editProjectResource = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/projectresources/${id}`, formValues);
    dispatch({
      type: EDIT_PROJECTPROJECTRESOURCE,
      payload: response.data.data.data,
    });
  };
};

export const deleteProjectResource = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/projectresources/${id}`);
    dispatch({ type: DELETE_PROJECTPROJECTRESOURCE, payload: id });
  };
};

//////////////////////////////////  PROJECT PROJECTS BUDGETING ////////////////////

export const createProjectBudgeting = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/projectbudgets", formValues);

    dispatch({
      type: CREATE_PROJECTPROJECTBUDGETING,
      payload: response.data.data.data,
    });
  };
};

export const fetchProjectBudgetings = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/projectbudgets");

    dispatch({
      type: FETCH_PROJECTPROJECTBUDGETINGS,
      payload: response.data.data.data,
    });
  };
};

export const fetchProjectBudgeting = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/projectbudgets/${id}`);
    dispatch({
      type: FETCH_PROJECTPROJECTBUDGETING,
      payload: response.data.data.data,
    });
  };
};

export const editProjectBudgeting = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/projectbudgets/${id}`, formValues);
    dispatch({
      type: EDIT_PROJECTPROJECTBUDGETING,
      payload: response.data.data.data,
    });
  };
};

export const deleteProjectBudgeting = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/projectbudgets/${id}`);
    dispatch({ type: DELETE_PROJECTPROJECTBUDGETING, payload: id });
  };
};

//////////////////////////////////  PROJECT PROJECTS PLANNING TASK ////////////////////

export const createProjectPlanningTask = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/projectplanningtasks", formValues);

    dispatch({
      type: CREATE_PROJECTPLANNINGTASK,
      payload: response.data.data.data,
    });
  };
};

export const fetchProjectPlanningTasks = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/projectplanningtasks");

    dispatch({
      type: FETCH_PROJECTPLANNINGTASKS,
      payload: response.data.data.data,
    });
  };
};

export const fetchProjectPlanningTask = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/projectplanningtasks/${id}`);
    dispatch({
      type: FETCH_PROJECTPLANNINGTASK,
      payload: response.data.data.data,
    });
  };
};

export const editProjectPlanningTask = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(
      `/projectplanningtasks/${id}`,
      formValues
    );
    dispatch({
      type: EDIT_PROJECTPLANNINGTASK,
      payload: response.data.data.data,
    });
  };
};

export const deleteProjectPlanningTask = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/projectplanningtasks/${id}`);
    dispatch({ type: DELETE_PROJECTPLANNINGTASK, payload: id });
  };
};

//////////////////////////////////  PROJECT PLANNING ACTIVITIES  ////////////////////

export const createProjectPlanningActivity = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/projectplanningactivities", formValues);

    dispatch({
      type: CREATE_PROJECTPLANNINGACTIVITY,
      payload: response.data.data.data,
    });
  };
};

export const fetchProjectPlanningActivities = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/projectplanningactivities");

    dispatch({
      type: FETCH_PROJECTPLANNINGACTIVITIES,
      payload: response.data.data.data,
    });
  };
};

export const fetchProjectPlanningActivity = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/projectplanningactivities/${id}`);
    dispatch({
      type: FETCH_PROJECTPLANNINGACTIVITY,
      payload: response.data.data.data,
    });
  };
};

export const editProjectPlanningActivity = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(
      `/projectplanningactivities/${id}`,
      formValues
    );
    dispatch({
      type: EDIT_PROJECTPLANNINGACTIVITY,
      payload: response.data.data.data,
    });
  };
};

export const deleteProjectPlanningActivity = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/projectplanningactivities/${id}`);
    dispatch({ type: DELETE_PROJECTPLANNINGACTIVITY, payload: id });
  };
};

//////////////////////////////////  PROJECT PLANNING SCHEDULINGS  ////////////////////

export const createProjectPlanningScheduling = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/projectplanningschedulings", formValues);

    dispatch({
      type: CREATE_PROJECTPLANNINGSCHEDULING,
      payload: response.data.data.data,
    });
  };
};

export const fetchProjectPlanningSchedulings = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/projectplanningschedulings");

    dispatch({
      type: FETCH_PROJECTPLANNINGSCHEDULINGS,
      payload: response.data.data.data,
    });
  };
};

export const fetchProjectPlanningScheduling = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/projectplanningschedulings/${id}`);
    dispatch({
      type: FETCH_PROJECTPLANNINGSCHEDULING,
      payload: response.data.data.data,
    });
  };
};

export const editProjectPlanningScheduling = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(
      `/projectplanningschedulings/${id}`,
      formValues
    );
    dispatch({
      type: EDIT_PROJECTPLANNINGSCHEDULING,
      payload: response.data.data.data,
    });
  };
};

export const deleteProjectPlanningScheduling = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/projectplanningschedulings/${id}`);
    dispatch({ type: DELETE_PROJECTPLANNINGSCHEDULING, payload: id });
  };
};

//////////////////////////////////  PROJECT EXECUTION ACTIVITIES ////////////////////

export const createProjectExecutionActivity = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/officeoperations", formValues);

    dispatch({
      type: CREATE_PROJECTEXECUTIONACTIVITY,
      payload: response.data.data.data,
    });
  };
};

export const fetchProjectExecutionActivities = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_PROJECTEXECUTIONACTIVITIES,
      payload: response.data.data.data,
    });
  };
};

export const fetchProjectExecutionActivity = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_PROJECTEXECUTIONACTIVITY,
      payload: response.data.data.data,
    });
  };
};

export const editProjectExecutionActivity = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({
      type: EDIT_PROJECTEXECUTIONACTIVITY,
      payload: response.data.data.data,
    });
  };
};

export const deleteProjectExecutionActivity = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_PROJECTEXECUTIONACTIVITY, payload: id });
  };
};

//////////////////////////////////  PROJECT PLANNING STEPS ////////////////////

export const createProjectPlanningStep = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/projectplanningsteps", formValues);

    dispatch({
      type: CREATE_PROJECTPLANNINGSTEP,
      payload: response.data.data.data,
    });
  };
};

export const fetchProjectPlanningSteps = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/projectplanningsteps");

    dispatch({
      type: FETCH_PROJECTPLANNINGSTEPS,
      payload: response.data.data.data,
    });
  };
};

export const fetchProjectPlanningStep = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/projectplanningsteps/${id}`);
    dispatch({
      type: FETCH_PROJECTPLANNINGSTEP,
      payload: response.data.data.data,
    });
  };
};

export const editProjectPlanningStep = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(
      `/projectplanningsteps/${id}`,
      formValues
    );
    dispatch({
      type: EDIT_PROJECTPLANNINGSTEP,
      payload: response.data.data.data,
    });
  };
};

export const deleteProjectPlanningStep = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/projectplanningsteps/${id}`);
    dispatch({ type: DELETE_PROJECTPLANNINGSTEP, payload: id });
  };
};

//////////////////////////////////  PROJECT PLANNING SEQUENCING ////////////////////

export const createProjectPlanningSequencing = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/projectplanningsequencings", formValues);

    dispatch({
      type: CREATE_PROJECTPLANNINGSEQUENCING,
      payload: response.data.data.data,
    });
  };
};

export const fetchProjectPlanningSequencings = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/projectplanningsequencings");

    dispatch({
      type: FETCH_PROJECTPLANNINGSEQUENCINGS,
      payload: response.data.data.data,
    });
  };
};

export const fetchProjectPlanningSequencing = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/projectplanningsequencings/${id}`);
    dispatch({
      type: FETCH_PROJECTPLANNINGSEQUENCING,
      payload: response.data.data.data,
    });
  };
};

export const editProjectPlanningSequencing = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(
      `/projectplanningsequencings/${id}`,
      formValues
    );
    dispatch({
      type: EDIT_PROJECTPLANNINGSEQUENCING,
      payload: response.data.data.data,
    });
  };
};

export const deleteProjectPlanningSequencing = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/projectplanningsequencings/${id}`);
    dispatch({ type: DELETE_PROJECTPLANNINGSEQUENCING, payload: id });
  };
};

//////////////////////////////////  PROJECT MONITORING TASK ////////////////////

export const createProjectMonitoringTask = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/projectmonitoringtasks", formValues);

    dispatch({
      type: CREATE_PROJECTMONITORINGTASK,
      payload: response.data.data.data,
    });
  };
};

export const fetchProjectMonitoringTasks = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/projectmonitoringtasks");

    dispatch({
      type: FETCH_PROJECTMONITORINGTASKS,
      payload: response.data.data.data,
    });
  };
};

export const fetchProjectMonitoringTask = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/projectmonitoringtasks/${id}`);
    dispatch({
      type: FETCH_PROJECTMONITORINGTASK,
      payload: response.data.data.data,
    });
  };
};

export const editProjectMonitoringTask = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(
      `/projectmonitoringtasks/${id}`,
      formValues
    );
    dispatch({
      type: EDIT_PROJECTMONITORINGTASK,
      payload: response.data.data.data,
    });
  };
};

export const deleteProjectMonitoringTask = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/projectmonitoringtasks/${id}`);
    dispatch({ type: DELETE_PROJECTMONITORINGTASK, payload: id });
  };
};

//////////////////////////////////  PROJECT CLOSURE ////////////////////

export const createProjectClosure = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/projectclosures", formValues);

    dispatch({
      type: CREATE_PROJECTCLOSURE,
      payload: response.data.data.data,
    });
  };
};

export const fetchProjectClosures = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/projectclosures");

    dispatch({
      type: FETCH_PROJECTCLOSURES,
      payload: response.data.data.data,
    });
  };
};

export const fetchProjectClosure = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/projectclosures/${id}`);
    dispatch({
      type: FETCH_PROJECTCLOSURE,
      payload: response.data.data.data,
    });
  };
};

export const editProjectClosure = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/projectclosures/${id}`, formValues);
    dispatch({
      type: EDIT_PROJECTCLOSURE,
      payload: response.data.data.data,
    });
  };
};

export const deleteProjectClosure = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/projectclosures/${id}`);
    dispatch({ type: DELETE_PROJECTCLOSURE, payload: id });
  };
};

//////////////////////////////////  PROJECT MONITORING ACTIVITY ////////////////////

export const createProjectMonitoringActivity = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post(
      "/projectmonitoringactivities",
      formValues
    );

    dispatch({
      type: CREATE_PROJECTMONITORINGACTIVITY,
      payload: response.data.data.data,
    });
  };
};

export const fetchProjectMonitoringActivities = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/projectmonitoringactivities");

    dispatch({
      type: FETCH_PROJECTMONITORINGACTIVITIES,
      payload: response.data.data.data,
    });
  };
};

export const fetchProjectMonitoringActivity = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/projectmonitoringactivities/${id}`);
    dispatch({
      type: FETCH_PROJECTMONITORINGACTIVITY,
      payload: response.data.data.data,
    });
  };
};

export const editProjectMonitoringActivity = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(
      `/projectmonitoringactivities/${id}`,
      formValues
    );
    dispatch({
      type: EDIT_PROJECTMONITORINGACTIVITY,
      payload: response.data.data.data,
    });
  };
};

export const deleteProjectMonitoringActivity = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/projectmonitoringactivities/${id}`);
    dispatch({ type: DELETE_PROJECTMONITORINGACTIVITY, payload: id });
  };
};

//////////////////////////////////  CRM CONTACTS ////////////////////

export const createContact = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/crmcontacts", formValues);

    dispatch({
      type: CREATE_CONTACT,
      payload: response.data.data.data,
    });
  };
};

export const fetchContacts = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/crmcontacts");

    dispatch({
      type: FETCH_CONTACTS,
      payload: response.data.data.data,
    });
  };
};

export const fetchContact = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/crmcontacts/${id}`);
    dispatch({
      type: FETCH_CONTACT,
      payload: response.data.data.data,
    });
  };
};

export const editContact = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/crmcontacts/${id}`, formValues);
    dispatch({
      type: EDIT_CONTACT,
      payload: response.data.data.data,
    });
  };
};

export const deleteContact = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/crmcontacts/${id}`);
    dispatch({ type: DELETE_CONTACT, payload: id });
  };
};

//////////////////////////////////  CRM CUSTOMER ////////////////////

export const createCustomer = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/crmcustomers", formValues);

    dispatch({
      type: CREATE_CUSTOMER,
      payload: response.data.data.data,
    });
  };
};

export const fetchCustomers = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/crmcustomers");

    dispatch({
      type: FETCH_CUSTOMERS,
      payload: response.data.data.data,
    });
  };
};

export const fetchCustomer = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/crmcustomers/${id}`);
    dispatch({
      type: FETCH_CUSTOMER,
      payload: response.data.data.data,
    });
  };
};

export const editCustomer = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/crmcustomers/${id}`, formValues);
    dispatch({
      type: EDIT_CUSTOMER,
      payload: response.data.data.data,
    });
  };
};

export const deleteCustomer = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/crmcustomers/${id}`);
    dispatch({ type: DELETE_CUSTOMER, payload: id });
  };
};

//////////////////////////////////  CRM sPARTNERS ////////////////////

export const createPartner = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/crmpartners", formValues);

    dispatch({
      type: CREATE_PARTNER,
      payload: response.data.data.data,
    });
  };
};

export const fetchPartners = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/crmpartners");

    dispatch({
      type: FETCH_PARTNERS,
      payload: response.data.data.data,
    });
  };
};

export const fetchPartner = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/crmpartners/${id}`);
    dispatch({
      type: FETCH_PARTNER,
      payload: response.data.data.data,
    });
  };
};

export const editPartner = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/crmpartners/${id}`, formValues);
    dispatch({
      type: EDIT_PARTNER,
      payload: response.data.data.data,
    });
  };
};

export const deletePartner = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/crmpartners/${id}`);
    dispatch({ type: DELETE_PARTNER, payload: id });
  };
};

//////////////////////////////////  CRM SUPPIERS ////////////////////

export const createSupplier = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/crmsuppliers", formValues);

    dispatch({
      type: CREATE_SUPPLIER,
      payload: response.data.data.data,
    });
  };
};

export const fetchSuppliers = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/crmsuppliers");

    dispatch({
      type: FETCH_SUPPLIERS,
      payload: response.data.data.data,
    });
  };
};

export const fetchSupplier = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/crmsuppliers/${id}`);
    dispatch({
      type: FETCH_SUPPLIER,
      payload: response.data.data.data,
    });
  };
};

export const editSupplier = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/crmsuppliers/${id}`, formValues);
    dispatch({
      type: EDIT_SUPPLIER,
      payload: response.data.data.data,
    });
  };
};

export const deleteSupplier = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/crmsuppliers/${id}`);
    dispatch({ type: DELETE_SUPPLIER, payload: id });
  };
};

//////////////////////////////////  SALES PRODUCT ////////////////////

export const createSalesProduct = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/salesproducts", formValues);

    dispatch({
      type: CREATE_SALESPRODUCT,
      payload: response.data.data.data,
    });
  };
};

export const fetchSalesProducts = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/salesproducts");

    dispatch({
      type: FETCH_SALESPRODUCTS,
      payload: response.data.data.data,
    });
  };
};

export const fetchSalesProduct = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/salesproducts/${id}`);
    dispatch({
      type: FETCH_SALESPRODUCT,
      payload: response.data.data.data,
    });
  };
};

export const editSalesProduct = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/salesproducts/${id}`, formValues);
    dispatch({
      type: EDIT_SALESPRODUCT,
      payload: response.data.data.data,
    });
  };
};

export const deleteSalesProduct = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/salesproducts/${id}`);
    dispatch({ type: DELETE_SALESPRODUCT, payload: id });
  };
};

//////////////////////////////////  SALES TEAM ////////////////////

export const createSalesTeam = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/salesteams", formValues);

    dispatch({
      type: CREATE_SALESTEAM,
      payload: response.data.data.data,
    });
  };
};

export const fetchSalesTeams = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/salesteams");

    dispatch({
      type: FETCH_SALESTEAMS,
      payload: response.data.data.data,
    });
  };
};

export const fetchSalesTeam = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/salesteams/${id}`);
    dispatch({
      type: FETCH_SALESTEAM,
      payload: response.data.data.data,
    });
  };
};

export const editSalesTeam = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/salesteams/${id}`, formValues);
    dispatch({
      type: EDIT_SALESTEAM,
      payload: response.data.data.data,
    });
  };
};

export const deleteSalesTeam = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/salesteams/${id}`);
    dispatch({ type: DELETE_SALESTEAM, payload: id });
  };
};

//////////////////////////////////  SALES TEAM MEMBERS ////////////////////

export const createSalesTeamMember = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/salesteammembers", formValues);

    dispatch({
      type: CREATE_SALESTEAMMEMBER,
      payload: response.data.data.data,
    });
  };
};

export const fetchSalesTeamMembers = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/salesteammembers");

    dispatch({
      type: FETCH_SALESTEAMMEMBERS,
      payload: response.data.data.data,
    });
  };
};

export const fetchSalesTeamMember = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/salesteammembers/${id}`);
    dispatch({
      type: FETCH_SALESTEAMMEMBER,
      payload: response.data.data.data,
    });
  };
};

export const editSalesTeamMember = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/salesteammembers/${id}`, formValues);
    dispatch({
      type: EDIT_SALESTEAMMEMBER,
      payload: response.data.data.data,
    });
  };
};

export const deleteSalesTeamMember = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/salesteammembers/${id}`);
    dispatch({ type: DELETE_SALESTEAMMEMBER, payload: id });
  };
};

/////////////////////////////////  SALES Task ////////////////////

export const createSalesTask = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/salestasks", formValues);

    dispatch({
      type: CREATE_SALESTASK,
      payload: response.data.data.data,
    });
  };
};

export const fetchSalesTasks = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/salestasks");

    dispatch({
      type: FETCH_SALESTASKS,
      payload: response.data.data.data,
    });
  };
};

export const fetchSalesTask = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/salestasks/${id}`);
    dispatch({
      type: FETCH_SALESTASK,
      payload: response.data.data.data,
    });
  };
};

export const editSalesTask = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/salestasks/${id}`, formValues);
    dispatch({
      type: EDIT_SALESTASK,
      payload: response.data.data.data,
    });
  };
};

export const deleteSalesTask = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/salestasks/${id}`);
    dispatch({ type: DELETE_SALESTASK, payload: id });
  };
};

/////////////////////////////////  SALES SALES ////////////////////

export const createSalesSale = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/sales", formValues);

    dispatch({
      type: CREATE_SALESSALE,
      payload: response.data.data.data,
    });
  };
};

export const fetchSalesSales = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/sales");

    dispatch({
      type: FETCH_SALESSALES,
      payload: response.data.data.data,
    });
  };
};

export const fetchSalesSale = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/sales/${id}`);
    dispatch({
      type: FETCH_SALESSALE,
      payload: response.data.data.data,
    });
  };
};

export const editSalesSale = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/sales/${id}`, formValues);
    dispatch({
      type: EDIT_SALESSALE,
      payload: response.data.data.data,
    });
  };
};

export const deleteSalesSale = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/sales/${id}`);
    dispatch({ type: DELETE_SALESSALE, payload: id });
  };
};

/////////////////////////////////  SALES INVOICES ////////////////////

export const createSalesInvoice = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/salesinvoices", formValues);

    dispatch({
      type: CREATE_SALESINVOICE,
      payload: response.data.data.data,
    });
  };
};

export const fetchSalesInvoices = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/salesinvoices");

    dispatch({
      type: FETCH_SALESINVOICES,
      payload: response.data.data.data,
    });
  };
};

export const fetchSalesInvoice = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/salesinvoices/${id}`);
    dispatch({
      type: FETCH_SALESINVOICE,
      payload: response.data.data.data,
    });
  };
};

export const editSalesInvoice = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/salesinvoices/${id}`, formValues);
    dispatch({
      type: EDIT_SALESINVOICE,
      payload: response.data.data.data,
    });
  };
};

export const deleteSalesInvoice = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/salesinvoices/${id}`);
    dispatch({ type: DELETE_SALESINVOICE, payload: id });
  };
};

/////////////////////////////////  SALES ACCOUNTS ////////////////////

export const createSalesAccount = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/salesaccounts", formValues);

    dispatch({
      type: CREATE_SALESACCOUNT,
      payload: response.data.data.data,
    });
  };
};

export const fetchSalesAccounts = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/salesaccounts");

    dispatch({
      type: FETCH_SALESACCOUNTS,
      payload: response.data.data.data,
    });
  };
};

export const fetchSalesAccount = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/salesaccounts/${id}`);
    dispatch({
      type: FETCH_SALESACCOUNT,
      payload: response.data.data.data,
    });
  };
};

export const editSalesAccount = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/salesaccounts/${id}`, formValues);
    dispatch({
      type: EDIT_SALESACCOUNT,
      payload: response.data.data.data,
    });
  };
};

export const deleteSalesAccount = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/salesaccounts/${id}`);
    dispatch({ type: DELETE_SALESACCOUNT, payload: id });
  };
};

/////////////////////////////////  HR UTILITY/UNITS ////////////////////

export const createHrUnit = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/hrunits", formValues);

    dispatch({
      type: CREATE_HRUNIT,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrUnits = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/hrunits");

    dispatch({
      type: FETCH_HRUNITS,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrUnit = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/hrunits/${id}`);
    dispatch({
      type: FETCH_HRUNIT,
      payload: response.data.data.data,
    });
  };
};

export const editHrUnit = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/hrunits/${id}`, formValues);
    dispatch({
      type: EDIT_HRUNIT,
      payload: response.data.data.data,
    });
  };
};

export const deleteHrUnit = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/hrunits/${id}`);
    dispatch({ type: DELETE_HRUNIT, payload: id });
  };
};

/////////////////////////////////  HR UTILITY/DEPARTMENT ////////////////////

export const createHrDepartment = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/hrdepartments", formValues);

    dispatch({
      type: CREATE_HRDEPARTMENT,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrDepartments = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/hrdepartments");

    dispatch({
      type: FETCH_HRDEPARTMENTS,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrDepartment = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/hrdepartments/${id}`);
    dispatch({
      type: FETCH_HRDEPARTMENT,
      payload: response.data.data.data,
    });
  };
};

export const editHrDepartment = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/hrdepartments/${id}`, formValues);
    dispatch({
      type: EDIT_HRDEPARTMENT,
      payload: response.data.data.data,
    });
  };
};

export const deleteHrDepartment = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/hrdepartments/${id}`);
    dispatch({ type: DELETE_HRDEPARTMENT, payload: id });
  };
};

/////////////////////////////////  HR UTILITY/GROUP ////////////////////

export const createHrGroup = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/hrgroups", formValues);

    dispatch({
      type: CREATE_HRGROUP,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrGroups = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/hrgroups");

    dispatch({
      type: FETCH_HRGROUPS,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrGroup = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/hrgroups/${id}`);
    dispatch({
      type: FETCH_HRGROUP,
      payload: response.data.data.data,
    });
  };
};

export const editHrGroup = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/hrgroups/${id}`, formValues);
    dispatch({
      type: EDIT_HRGROUP,
      payload: response.data.data.data,
    });
  };
};

export const deleteHrGroup = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/hrgroups/${id}`);
    dispatch({ type: DELETE_HRGROUP, payload: id });
  };
};

/////////////////////////////////  HR UTILITY/DIVISIONS ////////////////////

export const createHrDivision = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/hrdivisions", formValues);

    dispatch({
      type: CREATE_HRDIVISION,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrDivisions = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/hrdivisions");

    dispatch({
      type: FETCH_HRDIVISIONS,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrDivision = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/hrdivisions/${id}`);
    dispatch({
      type: FETCH_HRDIVISION,
      payload: response.data.data.data,
    });
  };
};

export const editHrDivision = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/hrdivisions/${id}`, formValues);
    dispatch({
      type: EDIT_HRDIVISION,
      payload: response.data.data.data,
    });
  };
};

export const deleteHrDivision = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/hrdivisions/${id}`);
    dispatch({ type: DELETE_HRDIVISION, payload: id });
  };
};

/////////////////////////////////  HR UTILITY/DESIGNATION ////////////////////

export const createHrDesignation = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/hrdesignations", formValues);

    dispatch({
      type: CREATE_HRDESIGNATION,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrDesignations = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/hrdesignations");

    dispatch({
      type: FETCH_HRDESIGNATIONS,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrDesignation = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/hrdesignations/${id}`);
    dispatch({
      type: FETCH_HRDESIGNATION,
      payload: response.data.data.data,
    });
  };
};

export const editHrDesignation = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/hrdesignations/${id}`, formValues);
    dispatch({
      type: EDIT_HRDESIGNATION,
      payload: response.data.data.data,
    });
  };
};

export const deleteHrDesignation = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/hrdesignations/${id}`);
    dispatch({ type: DELETE_HRDESIGNATION, payload: id });
  };
};

/////////////////////////////////  HR UTILITY/KPI SESSION ////////////////////

export const createHrKpiSession = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/hrkpisessions", formValues);

    dispatch({
      type: CREATE_HRKPISESSION,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrKpiSessions = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/hrkpisessions");

    dispatch({
      type: FETCH_HRKPISESSIONS,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrKpiSession = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/hrkpisessions/${id}`);
    dispatch({
      type: FETCH_HRKPISESSION,
      payload: response.data.data.data,
    });
  };
};

export const editHrKpiSession = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/hrkpisessions/${id}`, formValues);
    dispatch({
      type: EDIT_HRKPISESSION,
      payload: response.data.data.data,
    });
  };
};

export const deleteHrKpiSession = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/hrkpisessions/${id}`);
    dispatch({ type: DELETE_HRKPISESSION, payload: id });
  };
};

/////////////////////////////////  HR UTILITY/APPRISAL SEASON ////////////////////

export const createHrAppraisalSeason = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/hrappraisalseasons", formValues);

    dispatch({
      type: CREATE_HRAPPRAISALSEASON,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrAppraisalSeasons = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/hrappraisalseasons");

    dispatch({
      type: FETCH_HRAPPRAISALSEASONS,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrAppraisalSeason = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/hrappraisalseasons/${id}`);
    dispatch({
      type: FETCH_HRAPPRAISALSEASON,
      payload: response.data.data.data,
    });
  };
};

export const editHrAppraisalSeason = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/hrappraisalseasons/${id}`, formValues);
    dispatch({
      type: EDIT_HRAPPRAISALSEASON,
      payload: response.data.data.data,
    });
  };
};

export const deleteHrAppraisalSeason = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/hrappraisalseasons/${id}`);
    dispatch({ type: DELETE_HRAPPRAISALSEASON, payload: id });
  };
};

////////////////////////////////  HR ROLES ////////////////////

export const createHrRole = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/hrroles", formValues);

    dispatch({
      type: CREATE_HRROLE,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrRoles = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/hrroles");

    dispatch({
      type: FETCH_HRROLES,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrRole = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/hrroles/${id}`);
    dispatch({
      type: FETCH_HRROLE,
      payload: response.data.data.data,
    });
  };
};

export const editHrRole = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/hrroles/${id}`, formValues);
    dispatch({
      type: EDIT_HRROLE,
      payload: response.data.data.data,
    });
  };
};

export const deleteHrRole = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/hrroles/${id}`);
    dispatch({ type: DELETE_HRROLE, payload: id });
  };
};

////////////////////////////////  HR JOB DESCRIPTION ////////////////////

export const createHrJobDescription = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/hrjobdescriptions", formValues);

    dispatch({
      type: CREATE_HRJOBDESCRIPTION,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrJobDescriptions = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/hrjobdescriptions");

    dispatch({
      type: FETCH_HRJOBDESCRIPTIONS,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrJobDescription = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/hrjobdescriptions/${id}`);
    dispatch({
      type: FETCH_HRJOBDESCRIPTION,
      payload: response.data.data.data,
    });
  };
};

export const editHrJobDescription = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/hrjobdescriptions/${id}`, formValues);
    dispatch({
      type: EDIT_HRJOBDESCRIPTION,
      payload: response.data.data.data,
    });
  };
};

export const deleteHrJobDescription = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/hrjobdescriptions/${id}`);
    dispatch({ type: DELETE_HRJOBDESCRIPTION, payload: id });
  };
};

////////////////////////////////  HR SKILLSET ////////////////////

export const createHrPlanningSkillset = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/hrskillsets", formValues);

    dispatch({
      type: CREATE_HRPLANNINGSKILLSET,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrPlanningSkillsets = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/hrskillsets");

    dispatch({
      type: FETCH_HRPLANNINGSKILLSETS,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrPlanningSkillset = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/hrskillsets/${id}`);
    dispatch({
      type: FETCH_HRPLANNINGSKILLSET,
      payload: response.data.data.data,
    });
  };
};

export const editHrPlanningSkillset = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/hrskillsets/${id}`, formValues);
    dispatch({
      type: EDIT_HRPLANNINGSKILLSET,
      payload: response.data.data.data,
    });
  };
};

export const deleteHrPlanningSkillset = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/hrskillsets/${id}`);
    dispatch({ type: DELETE_HRPLANNINGSKILLSET, payload: id });
  };
};

////////////////////////////////  HR RECRUITMENT INITIATION ////////////////////

export const createHrRecruitmentInitiation = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/hrrecruitmentinitiations", formValues);

    dispatch({
      type: CREATE_HRRECRUITMENTINITIATION,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrRecruitmentInitiations = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/hrrecruitmentinitiations");

    dispatch({
      type: FETCH_HRRECRUITMENTINITIATIONS,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrRecruitmentInitiation = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/hrrecruitmentinitiations/${id}`);
    dispatch({
      type: FETCH_HRRECRUITMENTINITIATION,
      payload: response.data.data.data,
    });
  };
};

export const editHrRecruitmentInitiation = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(
      `/hrrecruitmentinitiations/${id}`,
      formValues
    );
    dispatch({
      type: EDIT_HRRECRUITMENTINITIATION,
      payload: response.data.data.data,
    });
  };
};

export const deleteHrRecruitmentInitiation = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/hrrecruitmentinitiations/${id}`);
    dispatch({ type: DELETE_HRRECRUITMENTINITIATION, payload: id });
  };
};

////////////////////////////////  HR RECRUITMENT INTERVIEWS ////////////////////

export const createHrRecruitmentInterview = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/hrrecruitmentinterviews", formValues);

    dispatch({
      type: CREATE_HRRECRUITMENTINTERVIEW,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrRecruitmentInterviews = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/hrrecruitmentinterviews");

    dispatch({
      type: FETCH_HRRECRUITMENTINTERVIEWS,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrRecruitmentInterview = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/hrrecruitmentinterviews/${id}`);
    dispatch({
      type: FETCH_HRRECRUITMENTINTERVIEW,
      payload: response.data.data.data,
    });
  };
};

export const editHrRecruitmentInterview = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(
      `/hrrecruitmentinterviews/${id}`,
      formValues
    );
    dispatch({
      type: EDIT_HRRECRUITMENTINTERVIEW,
      payload: response.data.data.data,
    });
  };
};

export const deleteHrRecruitmentInterview = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/hrrecruitmentinterviews/${id}`);
    dispatch({ type: DELETE_HRRECRUITMENTINTERVIEW, payload: id });
  };
};

////////////////////////////////  HR RECRUITMENT SELECTIONS ////////////////////

export const createHrRecruitmentSelection = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/hrrecruitmentselections", formValues);

    dispatch({
      type: CREATE_HRRECRUITMENTSELECTION,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrRecruitmentSelections = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/hrrecruitmentselections");

    dispatch({
      type: FETCH_HRRECRUITMENTSELECTIONS,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrRecruitmentSelection = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/hrrecruitmentselections/${id}`);
    dispatch({
      type: FETCH_HRRECRUITMENTSELECTION,
      payload: response.data.data.data,
    });
  };
};

export const editHrRecruitmentSelection = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(
      `/hrrecruitmentselections/${id}`,
      formValues
    );
    dispatch({
      type: EDIT_HRRECRUITMENTSELECTION,
      payload: response.data.data.data,
    });
  };
};

export const deleteHrRecruitmentSelection = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/hrrecruitmentselections/${id}`);
    dispatch({ type: DELETE_HRRECRUITMENTSELECTION, payload: id });
  };
};

////////////////////////////////  HR RECRUITMENT ONBOARD ////////////////////

export const createHrRecruitmentOnboard = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/hrrecruitmentonboarding", formValues);

    dispatch({
      type: CREATE_HRRECRUITMENTONBOARD,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrRecruitmentOnboards = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/hrrecruitmentonboarding");

    dispatch({
      type: FETCH_HRRECRUITMENTONBOARDS,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrRecruitmentOnboard = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/hrrecruitmentonboarding/${id}`);
    dispatch({
      type: FETCH_HRRECRUITMENTONBOARD,
      payload: response.data.data.data,
    });
  };
};

export const editHrRecruitmentOnboard = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(
      `/hrrecruitmentonboarding/${id}`,
      formValues
    );
    dispatch({
      type: EDIT_HRRECRUITMENTONBOARD,
      payload: response.data.data.data,
    });
  };
};

export const deleteHrRecruitmentOnboard = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/hrrecruitmentonboarding/${id}`);
    dispatch({ type: DELETE_HRRECRUITMENTONBOARD, payload: id });
  };
};

////////////////////////////////  HR RECRUITMENT PLACEMENT ////////////////////

export const createHrRecruitmentPlacement = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/hrrecruitmentplacements", formValues);

    dispatch({
      type: CREATE_HRRECRUITMENTPLACEMENT,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrRecruitmentPlacements = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/hrrecruitmentplacements");

    dispatch({
      type: FETCH_HRRECRUITMENTPLACEMENTS,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrRecruitmentPlacement = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/hrrecruitmentplacements/${id}`);
    dispatch({
      type: FETCH_HRRECRUITMENTPLACEMENT,
      payload: response.data.data.data,
    });
  };
};

export const editHrRecruitmentPlacement = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(
      `/hrrecruitmentplacements/${id}`,
      formValues
    );
    dispatch({
      type: EDIT_HRRECRUITMENTPLACEMENT,
      payload: response.data.data.data,
    });
  };
};

export const deleteHrRecruitmentPlacement = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/hrrecruitmentplacements/${id}`);
    dispatch({ type: DELETE_HRRECRUITMENTPLACEMENT, payload: id });
  };
};

////////////////////////////////  HR COMPENSATION SALARY ////////////////////

export const createHrCompensationSalary = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/hrcompensationsalaries", formValues);

    dispatch({
      type: CREATE_HRCOMPENSATIONSALARY,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrCompensationSalaries = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/hrcompensationsalaries");

    dispatch({
      type: FETCH_HRCOMPENSATIONSALARYS,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrCompensationSalary = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/hrcompensationsalaries/${id}`);
    dispatch({
      type: FETCH_HRCOMPENSATIONSALARY,
      payload: response.data.data.data,
    });
  };
};

export const editHrCompensationSalary = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(
      `/hrcompensationsalaries/${id}`,
      formValues
    );
    dispatch({
      type: EDIT_HRCOMPENSATIONSALARY,
      payload: response.data.data.data,
    });
  };
};

export const deleteHrCompensationSalary = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/hrcompensationsalaries/${id}`);
    dispatch({ type: DELETE_HRCOMPENSATIONSALARY, payload: id });
  };
};

///////////////////////////////  HR COMPENSATION BONUS ////////////////////

export const createHrCompensationBonus = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/hrcompensationbonuses", formValues);

    dispatch({
      type: CREATE_HRCOMPENSATIONBONUS,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrCompensationBonuses = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/hrcompensationbonuses");

    dispatch({
      type: FETCH_HRCOMPENSATIONBONUSES,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrCompensationBonus = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/hrcompensationbonuses/${id}`);
    dispatch({
      type: FETCH_HRCOMPENSATIONBONUS,
      payload: response.data.data.data,
    });
  };
};

export const editHrCompensationBonus = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(
      `/hrcompensationbonuses/${id}`,
      formValues
    );
    dispatch({
      type: EDIT_HRCOMPENSATIONBONUS,
      payload: response.data.data.data,
    });
  };
};

export const deleteHrCompensationBonus = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/hrcompensationbonuses/${id}`);
    dispatch({ type: DELETE_HRCOMPENSATIONBONUS, payload: id });
  };
};

///////////////////////////////  HR COMPENSATION LEAVE ALLOWANCE ////////////////////

export const createHrCompensationLeaveAllowance = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post(
      "/hrcompensationleaveallowances",
      formValues
    );

    dispatch({
      type: CREATE_HRCOMPENSATIONLEAVEALLOWANCE,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrCompensationLeaveAllowances = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/hrcompensationleaveallowances");

    dispatch({
      type: FETCH_HRCOMPENSATIONLEAVEALLOWANCES,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrCompensationLeaveAllowance = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/hrcompensationleaveallowances/${id}`);
    dispatch({
      type: FETCH_HRCOMPENSATIONLEAVEALLOWANCE,
      payload: response.data.data.data,
    });
  };
};

export const editHrCompensationLeaveAllowance = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(
      `/hrcompensationleaveallowances/${id}`,
      formValues
    );
    dispatch({
      type: EDIT_HRCOMPENSATIONLEAVEALLOWANCE,
      payload: response.data.data.data,
    });
  };
};

export const deleteHrCompensationLeaveAllowance = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/hrcompensationleaveallowances/${id}`);
    dispatch({ type: DELETE_HRCOMPENSATIONLEAVEALLOWANCE, payload: id });
  };
};

///////////////////////////////  HR COMPENSATION OVERTIMES ////////////////////

export const createHrCompensationOvertime = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/hrcompensationovertimes", formValues);

    dispatch({
      type: CREATE_HRCOMPENSATIONOVERTIME,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrCompensationOvertimes = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/hrcompensationovertimes");

    dispatch({
      type: FETCH_HRCOMPENSATIONOVERTIMES,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrCompensationOvertime = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/hrcompensationovertimes/${id}`);
    dispatch({
      type: FETCH_HRCOMPENSATIONOVERTIME,
      payload: response.data.data.data,
    });
  };
};

export const editHrCompensationOvertime = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(
      `/hrcompensationovertimes/${id}`,
      formValues
    );
    dispatch({
      type: EDIT_HRCOMPENSATIONOVERTIME,
      payload: response.data.data.data,
    });
  };
};

export const deleteHrCompensationOvertime = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/hrcompensationovertimes/${id}`);
    dispatch({ type: DELETE_HRCOMPENSATIONOVERTIME, payload: id });
  };
};

///////////////////////////////  HR COMPENSATION SALARY ADVANCE ////////////////////

export const createHrCompensationSalaryAdvance = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post(
      "/hrcompensationsalaryadvances",
      formValues
    );

    dispatch({
      type: CREATE_HRCOMPENSATIONSALARYADVANCE,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrCompensationSalaryAdvances = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/hrcompensationsalaryadvances");

    dispatch({
      type: FETCH_HRCOMPENSATIONSALARYADVANCES,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrCompensationSalaryAdvance = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/hrcompensationsalaryadvances/${id}`);
    dispatch({
      type: FETCH_HRCOMPENSATIONSALARYADVANCE,
      payload: response.data.data.data,
    });
  };
};

export const editHrCompensationSalaryAdvance = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(
      `/hrcompensationsalaryadvances/${id}`,
      formValues
    );
    dispatch({
      type: EDIT_HRCOMPENSATIONSALARYADVANCE,
      payload: response.data.data.data,
    });
  };
};

export const deleteHrCompensationSalaryAdvance = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/hrcompensationsalaryadvances/${id}`);
    dispatch({ type: DELETE_HRCOMPENSATIONSALARYADVANCE, payload: id });
  };
};

///////////////////////////////  HR COMPENSATION Staff loans ////////////////////

export const createHrCompensationStaffLoan = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/hrcompensationstaffloans", formValues);

    dispatch({
      type: CREATE_HRCOMPENSATIONSTAFFLOAN,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrCompensationStaffLoans = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/hrcompensationstaffloans");

    dispatch({
      type: FETCH_HRCOMPENSATIONSTAFFLOANS,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrCompensationStaffLoan = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/hrcompensationstaffloans/${id}`);
    dispatch({
      type: FETCH_HRCOMPENSATIONSTAFFLOAN,
      payload: response.data.data.data,
    });
  };
};

export const editHrCompensationStaffLoan = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(
      `/hrcompensationstaffloans/${id}`,
      formValues
    );
    dispatch({
      type: EDIT_HRCOMPENSATIONSTAFFLOAN,
      payload: response.data.data.data,
    });
  };
};

export const deleteHrCompensationStaffLoan = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/hrcompensationstaffloans/${id}`);
    dispatch({ type: DELETE_HRCOMPENSATIONSTAFFLOAN, payload: id });
  };
};

///////////////////////////////  HR COMPENSATION CERTIFICATE REFUNDS ////////////////////

export const createHrCompensationCertRefund = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post(
      "/hrcompensationcertificaterefunds",
      formValues
    );

    dispatch({
      type: CREATE_HRCOMPENSATIONCERTIFICATEREFUND,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrCompensationCertRefunds = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/hrcompensationcertificaterefunds");

    dispatch({
      type: FETCH_HRCOMPENSATIONCERTIFICATEREFUNDS,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrCompensationCertRefund = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/hrcompensationcertificaterefunds/${id}`);
    dispatch({
      type: FETCH_HRCOMPENSATIONCERTIFICATEREFUND,
      payload: response.data.data.data,
    });
  };
};

export const editHrCompensationCertRefund = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(
      `/hrcompensationcertificaterefunds/${id}`,
      formValues
    );
    dispatch({
      type: EDIT_HRCOMPENSATIONCERTIFICATEREFUND,
      payload: response.data.data.data,
    });
  };
};

export const deleteHrCompensationCertRefund = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/hrcompensationcertificaterefunds/${id}`);
    dispatch({ type: DELETE_HRCOMPENSATIONCERTIFICATEREFUND, payload: id });
  };
};

///////////////////////////////  HR LEAVES ////////////////////

export const createHrLeavesLeave = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/hrleavesleaves", formValues);

    dispatch({
      type: CREATE_HRLEAVELEAVE,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrLeavesLeaves = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/hrleavesleaves");

    dispatch({
      type: FETCH_HRLEAVELEAVES,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrLeavesLeave = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/hrleavesleaves/${id}`);
    dispatch({
      type: FETCH_HRLEAVELEAVE,
      payload: response.data.data.data,
    });
  };
};

export const editHrLeavesLeave = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/hrleavesleaves/${id}`, formValues);
    dispatch({
      type: EDIT_HRLEAVELEAVE,
      payload: response.data.data.data,
    });
  };
};

export const deleteHrLeavesLeave = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/hrleavesleaves/${id}`);
    dispatch({ type: DELETE_HRLEAVELEAVE, payload: id });
  };
};

///////////////////////////////  HR EXIT/EXIT ////////////////////

export const createHrExitExit = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/hrexitexits", formValues);

    dispatch({
      type: CREATE_HREXITEXIT,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrExitExits = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/hrexitexits");

    dispatch({
      type: FETCH_HREXITEXITS,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrExitExit = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/hrexitexits/${id}`);
    dispatch({
      type: FETCH_HREXITEXIT,
      payload: response.data.data.data,
    });
  };
};

export const editHrExitExit = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/hrexitexits/${id}`, formValues);
    dispatch({
      type: EDIT_HREXITEXIT,
      payload: response.data.data.data,
    });
  };
};

export const deleteHrExitExit = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/hrexitexits/${id}`);
    dispatch({ type: DELETE_HREXITEXIT, payload: id });
  };
};

///////////////////////////////  HR EXIT/CLEARANCE////////////////////

export const createHrExitClearance = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/hrexitclearances", formValues);

    dispatch({
      type: CREATE_HREXITCLEARANCE,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrExitClearances = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/hrexitclearances");

    dispatch({
      type: FETCH_HREXITCLEARANCES,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrExitClearance = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/hrexitclearances/${id}`);
    dispatch({
      type: FETCH_HREXITCLEARANCE,
      payload: response.data.data.data,
    });
  };
};

export const editHrExitClearance = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/hrexitclearances/${id}`, formValues);
    dispatch({
      type: EDIT_HREXITCLEARANCE,
      payload: response.data.data.data,
    });
  };
};

export const deleteHrExitClearance = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/hrexitclearances/${id}`);
    dispatch({ type: DELETE_HREXITCLEARANCE, payload: id });
  };
};

///////////////////////////////  HR PERFORMANCE/APPRAISAL////////////////////

export const createHrPerformanceAppraisal = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/hrperformanceappraisals", formValues);

    dispatch({
      type: CREATE_HRPERFORMANCEAPPRAISAL,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrPerformanceAppraisals = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/hrperformanceappraisals");

    dispatch({
      type: FETCH_HRPERFORMANCEAPPRAISALS,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrPerformanceAppraisal = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/hrperformanceappraisals/${id}`);
    dispatch({
      type: FETCH_HRPERFORMANCEAPPRAISAL,
      payload: response.data.data.data,
    });
  };
};

export const editHrPerformanceAppraisal = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(
      `/hrperformanceappraisals/${id}`,
      formValues
    );
    dispatch({
      type: EDIT_HRPERFORMANCEAPPRAISAL,
      payload: response.data.data.data,
    });
  };
};

export const deleteHrPerformanceAppraisal = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/hrperformanceappraisals/${id}`);
    dispatch({ type: DELETE_HRPERFORMANCEAPPRAISAL, payload: id });
  };
};

///////////////////////////////  HR PERFORMANCE/PERFORMANCE ////////////////////

export const createHrPerformancePerformance = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/hrperformanceperformances", formValues);

    dispatch({
      type: CREATE_HRPERFORMANCEPERFORMANCE,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrPerformancePerformances = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/hrperformanceperformances");

    dispatch({
      type: FETCH_HRPERFORMANCEPERFORMANCES,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrPerformancePerformance = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/hrperformanceperformances/${id}`);
    dispatch({
      type: FETCH_HRPERFORMANCEPERFORMANCE,
      payload: response.data.data.data,
    });
  };
};

export const editHrPerformancePerformance = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(
      `/hrperformanceperformances/${id}`,
      formValues
    );
    dispatch({
      type: EDIT_HRPERFORMANCEPERFORMANCE,
      payload: response.data.data.data,
    });
  };
};

export const deleteHrPerformancePerformance = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/hrperformanceperformances/${id}`);
    dispatch({ type: DELETE_HRPERFORMANCEPERFORMANCE, payload: id });
  };
};

///////////////////////////////  HR SELF SERVICE/LEAVE ////////////////////

export const createHrSelfServiceLeave = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/hrselfserviceleaves", formValues);

    dispatch({
      type: CREATE_HRSELFSERVICELEAVE,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrSelfServiceLeaves = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/hrselfserviceleaves");

    dispatch({
      type: FETCH_HRSELFSERVICELEAVES,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrSelfServiceLeave = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/hrselfserviceleaves/${id}`);
    dispatch({
      type: FETCH_HRSELFSERVICELEAVE,
      payload: response.data.data.data,
    });
  };
};

export const editHrSelfServiceLeave = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/hrselfserviceleaves/${id}`, formValues);
    dispatch({
      type: EDIT_HRSELFSERVICELEAVE,
      payload: response.data.data.data,
    });
  };
};

export const deleteHrSelfServiceLeave = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/hrselfserviceleaves/${id}`);
    dispatch({ type: DELETE_HRSELFSERVICELEAVE, payload: id });
  };
};

///////////////////////////////  HR SELF SERVICE/staff loan ////////////////////

export const createHrSelfServiceStaffLoan = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/hrselfservicestaffloans", formValues);

    dispatch({
      type: CREATE_HRSELFSERVICESTAFFLOAN,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrSelfServiceStaffLoans = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/hrselfservicestaffloans");

    dispatch({
      type: FETCH_HRSELFSERVICESTAFFLOANS,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrSelfServiceStaffLoan = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/hrselfservicestaffloans/${id}`);
    dispatch({
      type: FETCH_HRSELFSERVICESTAFFLOAN,
      payload: response.data.data.data,
    });
  };
};

export const editHrSelfServiceStaffLoan = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(
      `/hrselfservicestaffloans/${id}`,
      formValues
    );
    dispatch({
      type: EDIT_HRSELFSERVICESTAFFLOAN,
      payload: response.data.data.data,
    });
  };
};

export const deleteHrSelfServiceStaffLoan = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/hrselfservicestaffloans/${id}`);
    dispatch({ type: DELETE_HRSELFSERVICESTAFFLOAN, payload: id });
  };
};

///////////////////////////////  HR SELF SERVICE/CERTIFICTE REFUNDS ////////////////////

export const createHrSelfServiceCertificateRefund = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post(
      "/hrselfservicecertificaterefunds",
      formValues
    );

    dispatch({
      type: CREATE_HRSELFSERVICECERTREFUND,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrSelfServiceCertificateRefunds = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/hrselfservicecertificaterefunds");

    dispatch({
      type: FETCH_HRSELFSERVICECERTREFUNDS,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrSelfServiceCertificateRefund = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/hrselfservicecertificaterefunds/${id}`);
    dispatch({
      type: FETCH_HRSELFSERVICECERTREFUND,
      payload: response.data.data.data,
    });
  };
};

export const editHrSelfServiceCertificateRefund = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(
      `/hrselfservicecertificaterefunds/${id}`,
      formValues
    );
    dispatch({
      type: EDIT_HRSELFSERVICECERTREFUND,
      payload: response.data.data.data,
    });
  };
};

export const deleteHrSelfServiceCertificateRefund = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/hrselfservicecertificaterefunds/${id}`);
    dispatch({ type: DELETE_HRSELFSERVICECERTREFUND, payload: id });
  };
};

///////////////////////////////  HR SELF SERVICE/EXIT ////////////////////

export const createHrSelfServiceExit = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/hrselfserviceexits", formValues);

    dispatch({
      type: CREATE_HRSELFSERVICEEXIT,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrSelfServiceExits = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/hrselfserviceexits");

    dispatch({
      type: FETCH_HRSELFSERVICEEXITS,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrSelfServiceExit = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/hrselfserviceexits/${id}`);
    dispatch({
      type: FETCH_HRSELFSERVICEEXIT,
      payload: response.data.data.data,
    });
  };
};

export const editHrSelfServiceExit = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/hrselfserviceexits/${id}`, formValues);
    dispatch({
      type: EDIT_HRSELFSERVICEEXIT,
      payload: response.data.data.data,
    });
  };
};

export const deleteHrSelfServiceExit = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/hrselfserviceexits/${id}`);
    dispatch({ type: DELETE_HRSELFSERVICEEXIT, payload: id });
  };
};

///////////////////////////////  HR SELF SERVICE/OVERTIME ////////////////////

export const createHrSelfServiceOvertime = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/hrselfserviceovertimes", formValues);

    dispatch({
      type: CREATE_HRSELFSERVICEOVERTIME,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrSelfServiceOvertimes = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/hrselfserviceovertimes");

    dispatch({
      type: FETCH_HRSELFSERVICEOVERTIMES,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrSelfServiceOvertime = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/hrselfserviceovertimes/${id}`);
    dispatch({
      type: FETCH_HRSELFSERVICEOVERTIME,
      payload: response.data.data.data,
    });
  };
};

export const editHrSelfServiceOvertime = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(
      `/hrselfserviceovertimes/${id}`,
      formValues
    );
    dispatch({
      type: EDIT_HRSELFSERVICEOVERTIME,
      payload: response.data.data.data,
    });
  };
};

export const deleteHrSelfServiceOvertime = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/hrselfserviceovertimes/${id}`);
    dispatch({ type: DELETE_HRSELFSERVICEOVERTIME, payload: id });
  };
};

///////////////////////////////  HR SELF SERVICE/SALARY ADVANCE ////////////////////

export const createHrSelfServiceSalaryAdvance = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post(
      "/hrselfservicesalaryadvances",
      formValues
    );

    dispatch({
      type: CREATE_HRSELFSERVICESALARYADVANCE,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrSelfServiceSalaryAdvances = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/hrselfservicesalaryadvances");

    dispatch({
      type: FETCH_HRSELFSERVICESALARYADVANCES,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrSelfServiceSalaryAdvance = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/hrselfservicesalaryadvances/${id}`);
    dispatch({
      type: FETCH_HRSELFSERVICESALARYADVANCE,
      payload: response.data.data.data,
    });
  };
};

export const editHrSelfServiceSalaryAdvance = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(
      `/hrselfservicesalaryadvances/${id}`,
      formValues
    );
    dispatch({
      type: EDIT_HRSELFSERVICESALARYADVANCE,
      payload: response.data.data.data,
    });
  };
};

export const deleteHrSelfServiceSalaryAdvance = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/hrselfservicesalaryadvances/${id}`);
    dispatch({ type: DELETE_HRSELFSERVICESALARYADVANCE, payload: id });
  };
};

///////////////////////////////  HR SELF SERVICE/APPRAISAL ////////////////////

export const createHrSelfServiceAppraisal = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/hrselfserviceappraisals", formValues);

    dispatch({
      type: CREATE_HRSELFSERVICEAPPRAISAL,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrSelfServiceAppraisals = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/hrselfserviceappraisals");

    dispatch({
      type: FETCH_HRSELFSERVICEAPPRAISALS,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrSelfServiceAppraisal = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/hrselfserviceappraisals/${id}`);
    dispatch({
      type: FETCH_HRSELFSERVICEAPPRAISAL,
      payload: response.data.data.data,
    });
  };
};

export const editHrSelfServiceAppraisal = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(
      `/hrselfserviceappraisals/${id}`,
      formValues
    );
    dispatch({
      type: EDIT_HRSELFSERVICEAPPRAISAL,
      payload: response.data.data.data,
    });
  };
};

export const deleteHrSelfServiceAppraisal = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/hrselfserviceappraisals/${id}`);
    dispatch({ type: DELETE_HRSELFSERVICEAPPRAISAL, payload: id });
  };
};

///////////////////////////////  HR SELF SERVICE/PAYSLIP ////////////////////

export const createHrSelfServicePayslip = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/hrselfservicepayslips", formValues);

    dispatch({
      type: CREATE_HRSELFSERVICEPAYSLIP,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrSelfServicePayslips = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/hrselfservicepayslips");

    dispatch({
      type: FETCH_HRSELFSERVICEPAYSLIPS,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrSelfServicePayslip = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/hrselfservicepayslips/${id}`);
    dispatch({
      type: FETCH_HRSELFSERVICEPAYSLIP,
      payload: response.data.data.data,
    });
  };
};

export const editHrSelfServicePayslip = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(
      `/hrselfservicepayslips/${id}`,
      formValues
    );
    dispatch({
      type: EDIT_HRSELFSERVICEPAYSLIP,
      payload: response.data.data.data,
    });
  };
};

export const deleteHrSelfServicePayslip = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/hrselfservicepayslips/${id}`);
    dispatch({ type: DELETE_HRSELFSERVICEPAYSLIP, payload: id });
  };
};

///////////////////////////////  HR UTILITY/EMOLUMENT PERIOD ////////////////////

export const createHrUtilityEmolumentPeriod = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/hremolumentperiods", formValues);

    dispatch({
      type: CREATE_HRUTILITYEMOLUMENTPERIOD,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrUtilityEmolumentPeriods = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/hremolumentperiods");

    dispatch({
      type: FETCH_HRUTILITYEMOLUMENTPERIODS,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrUtilityEmolumentPeriod = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/hremolumentperiods/${id}`);
    dispatch({
      type: FETCH_HRUTILITYEMOLUMENTPERIOD,
      payload: response.data.data.data,
    });
  };
};

export const editHrUtilityEmolumentPeriod = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/hremolumentperiods/${id}`, formValues);
    dispatch({
      type: EDIT_HRUTILITYEMOLUMENTPERIOD,
      payload: response.data.data.data,
    });
  };
};

export const deleteHrUtilityEmolumentPeriod = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/hremolumentperiods/${id}`);
    dispatch({ type: DELETE_HRUTILITYEMOLUMENTPERIOD, payload: id });
  };
};

///////////////////////////////  HR UTILITY/BONUS RATE ////////////////////

export const createHrUtilityBonusRate = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/hrbonusrates", formValues);

    dispatch({
      type: CREATE_HRUTILITYBONUSRATE,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrUtilityBonusRates = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/hrbonusrates");

    dispatch({
      type: FETCH_HRUTILITYBONUSRATES,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrUtilityBonusRate = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/hrbonusrates/${id}`);
    dispatch({
      type: FETCH_HRUTILITYBONUSRATE,
      payload: response.data.data.data,
    });
  };
};

export const editHrUtilityBonusRate = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/hrbonusrates/${id}`, formValues);
    dispatch({
      type: EDIT_HRUTILITYBONUSRATE,
      payload: response.data.data.data,
    });
  };
};

export const deleteHrUtilityBonusRate = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/hrbonusrates/${id}`);
    dispatch({ type: DELETE_HRUTILITYBONUSRATE, payload: id });
  };
};

///////////////////////////////  HR UTILITY/OVERTIME RATE ////////////////////

export const createHrUtilityOvertimeRate = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/hrovertimerates", formValues);

    dispatch({
      type: CREATE_HRUTILITYOVERTIMERATE,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrUtilityOvertimeRates = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/hrovertimerates");

    dispatch({
      type: FETCH_HRUTILITYOVERTIMERATES,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrUtilityOvertimeRate = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/hrovertimerates/${id}`);
    dispatch({
      type: FETCH_HRUTILITYOVERTIMERATE,
      payload: response.data.data.data,
    });
  };
};

export const editHrUtilityOvertimeRate = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/hrovertimerates/${id}`, formValues);
    dispatch({
      type: EDIT_HRUTILITYOVERTIMERATE,
      payload: response.data.data.data,
    });
  };
};

export const deleteHrUtilityOvertimeRate = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/hrovertimerates/${id}`);
    dispatch({ type: DELETE_HRUTILITYOVERTIMERATE, payload: id });
  };
};

///////////////////////////////  HR UTILITY/ORGANIZATION LEVEL ////////////////////

export const createHrUtilityOrganizationLevel = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/hrorganizationlevels", formValues);

    dispatch({
      type: CREATE_HRUTILITYORGANIZATIONLEVEL,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrUtilityOrganizationLevels = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/hrorganizationlevels");

    dispatch({
      type: FETCH_HRUTILITYORGANIZATIONLEVELS,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrUtilityOrganizationLevel = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/hrorganizationlevels/${id}`);
    dispatch({
      type: FETCH_HRUTILITYORGANIZATIONLEVEL,
      payload: response.data.data.data,
    });
  };
};

export const editHrUtilityOrganizationLevel = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(
      `/hrorganizationlevels/${id}`,
      formValues
    );
    dispatch({
      type: EDIT_HRUTILITYORGANIZATIONLEVEL,
      payload: response.data.data.data,
    });
  };
};

export const deleteHrUtilityOrganizationLevel = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/hrorganizationlevels/${id}`);
    dispatch({ type: DELETE_HRUTILITYORGANIZATIONLEVEL, payload: id });
  };
};

///////////////////////////////  HR UTILITY/Salary grade ////////////////////

export const createHrUtilitySalaryGrade = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/hrsalarygrades", formValues);

    dispatch({
      type: CREATE_HRUTILITYSALARYGRADE,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrUtilitySalaryGrades = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/hrsalarygrades");

    dispatch({
      type: FETCH_HRUTILITYSALARYGRADES,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrUtilitySalaryGrade = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/hrsalarygrades/${id}`);
    dispatch({
      type: FETCH_HRUTILITYSALARYGRADE,
      payload: response.data.data.data,
    });
  };
};

export const editHrUtilitySalaryGrade = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/hrsalarygrades/${id}`, formValues);
    dispatch({
      type: EDIT_HRUTILITYSALARYGRADE,
      payload: response.data.data.data,
    });
  };
};

export const deleteHrUtilitySalaryGrade = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/hrsalarygrades/${id}`);
    dispatch({ type: DELETE_HRUTILITYSALARYGRADE, payload: id });
  };
};

///////////////////////////////  HR UTILITY/Salary grade DEDUCTABELS ////////////////////

export const createHrUtilitySalaryGradeDeductable = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/hrsalarygradedeductables", formValues);

    dispatch({
      type: CREATE_HRUTILITYSALARYGRADEDEDUCTABLE,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrUtilitySalaryGradeDeductables = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/hrsalarygradedeductables");

    dispatch({
      type: FETCH_HRUTILITYSALARYGRADEDEDUCTABLES,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrUtilitySalaryGradeDeductable = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/hrsalarygradedeductables/${id}`);
    dispatch({
      type: FETCH_HRUTILITYSALARYGRADEDEDUCTABLE,
      payload: response.data.data.data,
    });
  };
};

export const editHrUtilitySalaryGradeDeductable = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(
      `/hrsalarygradedeductables/${id}`,
      formValues
    );
    dispatch({
      type: EDIT_HRUTILITYSALARYGRADEDEDUCTABLE,
      payload: response.data.data.data,
    });
  };
};

export const deleteHrUtilitySalaryGradeDeductable = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/hrsalarygradedeductables/${id}`);
    dispatch({ type: DELETE_HRUTILITYSALARYGRADEDEDUCTABLE, payload: id });
  };
};

///////////////////////////////  HR UTILITY/Extra DEDUCTABELS ////////////////////

export const createHrUtilityExtraDeductable = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/hrextradeductables", formValues);

    dispatch({
      type: CREATE_HRUTILITYEXTRADEDUCTABLE,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrUtilityExtraDeductables = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/hrextradeductables");

    dispatch({
      type: FETCH_HRUTILITYEXTRADEDUCTABLES,
      payload: response.data.data.data,
    });
  };
};

export const fetchHrUtilityExtraDeductable = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/hrextradeductables/${id}`);
    dispatch({
      type: FETCH_HRUTILITYEXTRADEDUCTABLE,
      payload: response.data.data.data,
    });
  };
};

export const editHrUtilityExtraDeductable = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/hrextradeductables/${id}`, formValues);
    dispatch({
      type: EDIT_HRUTILITYEXTRADEDUCTABLE,
      payload: response.data.data.data,
    });
  };
};

export const deleteHrUtilityExtraDeductable = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/hrextradeductables/${id}`);
    dispatch({ type: DELETE_HRUTILITYEXTRADEDUCTABLE, payload: id });
  };
};

///////////////////////////////  ASSETS SET ACTION CREATORS ////////////////////

export const createAssetSet = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/assetsets", formValues);

    dispatch({
      type: CREATE_ASSETSET,
      payload: response.data.data.data,
    });
  };
};

export const fetchAssetSets = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/assetsets");

    dispatch({
      type: FETCH_ASSETSETS,
      payload: response.data.data.data,
    });
  };
};

export const fetchAssetSet = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/assetsets/${id}`);
    dispatch({
      type: FETCH_ASSETSET,
      payload: response.data.data.data,
    });
  };
};

export const editAssetSet = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  return async (dispatch) => {
    const response = await data.patch(`/assetsets/${id}`, formValues);

    dispatch({
      type: EDIT_ASSETSET,
      payload: response.data.data.data,
    });
  };
};

export const deleteAssetSet = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/assetsets/${id}`);
    dispatch({ type: DELETE_ASSETSET, payload: id });
  };
};

export const adjustQuantityInAssetSet = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  return async () => {
    const response = await data.patch(`/assetsets/${id}`, formValues);
  };
};

///////////////////////////////  ASSETS SET BATCH ACTION CREATORS ////////////////////

export const createAssetSetBatch = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/assetsetbatches", formValues);

    dispatch({
      type: CREATE_ASSETSETBATCH,
      payload: response.data.data.data,
    });
  };
};

export const fetchAssetSetBatches = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/assetsetbatches");

    dispatch({
      type: FETCH_ASSETSETBATCHES,
      payload: response.data.data.data,
    });
  };
};

export const fetchAssetSetBatch = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/assetsetbatches/${id}`);
    dispatch({
      type: FETCH_ASSETSETBATCH,
      payload: response.data.data.data,
    });
  };
};

export const editAssetSetBatch = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/assetsetbatches/${id}`, formValues);
    dispatch({
      type: EDIT_ASSETSETBATCH,
      payload: response.data.data.data,
    });
  };
};

export const deleteAssetSetBatch = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/assetsetbatches/${id}`);
    dispatch({ type: DELETE_ASSETSETBATCH, payload: id });
  };
};
