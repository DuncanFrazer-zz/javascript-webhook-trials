/**
 * @api {put} /doors/open Door open
 * @apiName DoorOpen
 * @apiGroup sesame
 * @apiDescription performs open operation on door. Tries to move door into "opened" state no matter what actual conditions are
 * @apiUse AuthorizationHeader
 * @apiSuccess 200
 * @apiError 401 Unauthorized
 * @apiError 405 Not allowed, door are already opened
 * @apiError 406 Device Server issue
 * @apiSuccess count Door open counter. Number of times door reached opened state.
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
 * "links": [
 *   {
 *     "rel": "reset",
 *     "href": "http://localhost:3000/doors/open/reset"
 *   },
 *   "count" : 0
 * }
 */
router.put('/doors/open', DoorOperationController.doorOpen);

/**
 * @api {put} /doors/open/reset Reset open counter
 * @apiName DoorOpenCounterReset
 * @apiGroup sesame
 * @apiDescription Resets the door open counter
 * @apiUse AuthorizationHeader
 * @apiSuccess 204
 * @apiError 401 Unauthorized
 * @apiError 406 Device Server issue
 */
router.put('/doors/open/reset', SesameController.doorOpenCounterReset);


/**
 * @api {put} /doors/close Door close
 * @apiName DoorClose
 * @apiGroup sesame
 * @apiDescription performs close operation on door. Tries to move door into "closed" state no matter what actual conditions are
 * @apiUse AuthorizationHeader
 * @apiSuccess 204
 * @apiError 401 Unauthorized
 * @apiError 405 Not allowed, door are already closed
 * @apiError 406 Device Server issue
 */
router.put('/doors/close', DoorOperationController.doorClose);

/**
 * @api {put} /doors/close/reset Reset close counter
 * @apiName DoorCloseCounterReset
 * @apiGroup sesame
 * @apiDescription Resets the door open counter
 * @apiUse AuthorizationHeader
 * @apiSuccess 204
 * @apiError 401 Unauthorized
 * @apiError 406 Device Server issue
 */
router.put('/doors/close/reset', SesameController.doorCloseCounterReset);

