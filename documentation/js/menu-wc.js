'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nest-typescript-starter documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-e13c6408ad1474a5270cb2debb8966ee2eefcb792d9e3e619c2ddd0afd3b6a7799f2125f42cd922e48d62a07757c4323bf8f6609af194065f320d6dd209c1147"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-e13c6408ad1474a5270cb2debb8966ee2eefcb792d9e3e619c2ddd0afd3b6a7799f2125f42cd922e48d62a07757c4323bf8f6609af194065f320d6dd209c1147"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-e13c6408ad1474a5270cb2debb8966ee2eefcb792d9e3e619c2ddd0afd3b6a7799f2125f42cd922e48d62a07757c4323bf8f6609af194065f320d6dd209c1147"' :
                                            'id="xs-controllers-links-module-AuthModule-e13c6408ad1474a5270cb2debb8966ee2eefcb792d9e3e619c2ddd0afd3b6a7799f2125f42cd922e48d62a07757c4323bf8f6609af194065f320d6dd209c1147"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-e13c6408ad1474a5270cb2debb8966ee2eefcb792d9e3e619c2ddd0afd3b6a7799f2125f42cd922e48d62a07757c4323bf8f6609af194065f320d6dd209c1147"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-e13c6408ad1474a5270cb2debb8966ee2eefcb792d9e3e619c2ddd0afd3b6a7799f2125f42cd922e48d62a07757c4323bf8f6609af194065f320d6dd209c1147"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-e13c6408ad1474a5270cb2debb8966ee2eefcb792d9e3e619c2ddd0afd3b6a7799f2125f42cd922e48d62a07757c4323bf8f6609af194065f320d6dd209c1147"' :
                                        'id="xs-injectables-links-module-AuthModule-e13c6408ad1474a5270cb2debb8966ee2eefcb792d9e3e619c2ddd0afd3b6a7799f2125f42cd922e48d62a07757c4323bf8f6609af194065f320d6dd209c1147"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SignInProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignInProvider</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-fb33a3af6de6d1a683b53ba26f50e7c434b96fa527e60527bb334c63b4f4a612a681d83442a965619c4e4ad0db871bfb591df3aa5f89174cc94ce2cf65b2b8f8"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-fb33a3af6de6d1a683b53ba26f50e7c434b96fa527e60527bb334c63b4f4a612a681d83442a965619c4e4ad0db871bfb591df3aa5f89174cc94ce2cf65b2b8f8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-fb33a3af6de6d1a683b53ba26f50e7c434b96fa527e60527bb334c63b4f4a612a681d83442a965619c4e4ad0db871bfb591df3aa5f89174cc94ce2cf65b2b8f8"' :
                                        'id="xs-injectables-links-module-PostsModule-fb33a3af6de6d1a683b53ba26f50e7c434b96fa527e60527bb334c63b4f4a612a681d83442a965619c4e4ad0db871bfb591df3aa5f89174cc94ce2cf65b2b8f8"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RecipesModule.html" data-type="entity-link" >RecipesModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-RecipesModule-1c8e4e76d4ce9bb8a164ede7e117cf40e31450505a17971ffe7d2fadf7fe959f8ed20975b739fd5927ec97e8f892daffb9d286dc14325b55ca166e1c05dc2283"' : 'data-bs-target="#xs-injectables-links-module-RecipesModule-1c8e4e76d4ce9bb8a164ede7e117cf40e31450505a17971ffe7d2fadf7fe959f8ed20975b739fd5927ec97e8f892daffb9d286dc14325b55ca166e1c05dc2283"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RecipesModule-1c8e4e76d4ce9bb8a164ede7e117cf40e31450505a17971ffe7d2fadf7fe959f8ed20975b739fd5927ec97e8f892daffb9d286dc14325b55ca166e1c05dc2283"' :
                                        'id="xs-injectables-links-module-RecipesModule-1c8e4e76d4ce9bb8a164ede7e117cf40e31450505a17971ffe7d2fadf7fe959f8ed20975b739fd5927ec97e8f892daffb9d286dc14325b55ca166e1c05dc2283"' }>
                                        <li class="link">
                                            <a href="injectables/RecipesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RecipesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Post.html" data-type="entity-link" >Post</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Recipe.html" data-type="entity-link" >Recipe</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/ComplexityPlugin.html" data-type="entity-link" >ComplexityPlugin</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostInput.html" data-type="entity-link" >CreatePostInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/DateScalar.html" data-type="entity-link" >DateScalar</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoggingPlugin.html" data-type="entity-link" >LoggingPlugin</a>
                            </li>
                            <li class="link">
                                <a href="classes/NewRecipeInput.html" data-type="entity-link" >NewRecipeInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/Post.html" data-type="entity-link" >Post</a>
                            </li>
                            <li class="link">
                                <a href="classes/PostInterface.html" data-type="entity-link" >PostInterface</a>
                            </li>
                            <li class="link">
                                <a href="classes/PostsResolver.html" data-type="entity-link" >PostsResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/Recipe.html" data-type="entity-link" >Recipe</a>
                            </li>
                            <li class="link">
                                <a href="classes/RecipesArgs.html" data-type="entity-link" >RecipesArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/RecipesResolver.html" data-type="entity-link" >RecipesResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/RecipeUpdate.html" data-type="entity-link" >RecipeUpdate</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignInDto.html" data-type="entity-link" >SignInDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePostInput.html" data-type="entity-link" >UpdatePostInput</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AccessTokenGuard.html" data-type="entity-link" >AccessTokenGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IQuery.html" data-type="entity-link" >IQuery</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ReactionPostInput.html" data-type="entity-link" >ReactionPostInput</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});