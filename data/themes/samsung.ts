
export const samsung = {
    name: 'samsung',
    logo: 'logo.png',
    logoFooter: 'logo_footer.png',
    floatingContactList: {
        button: 'cursor-pointer transition-all duration-300 hover:scale-115 rounded-full p-3 flex flex-col gap-4 shadow-lg',
        whatsapp: 'bg-green-500 hover:bg-green-600',
        phone: 'bg-red-600 hover:bg-red-700',
    },
    hero: {
        background: {
            image: 'https://images.samsung.com/is/image/samsung/p6pim/br/feature/166441956/br-feature-wf90f27-548543147?$FB_TYPE_A_JPG$',
            color: `from-blue-600/80 via-blue-700/80 to-blue-800/80 backdrop-blur-sm bg-blend-overlay`,
            effects: [
                `absolute top-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse`,
                `absolute bottom-20 right-20 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse delay-1000`,
                `absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl`,
            ]
        },
        subtitle: {
            background: 'inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20',
            icon: 'w-4 h-4 text-blue-200 mr-2',
            text: 'text-white/90 text-sm font-medium',
        },
        title: {
            product: `block text-blue-200`,
            brand: `block text-blue-100`,
        },
        features: {
            background: 'flex items-center space-x-3 p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10',
            text: 'text-white/90 text-sm font-medium',
        },
        schedule: {
            floatingBorder: 'relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl shadow-black/20 p-8 transform hover:scale-105 transition-all duration-500',
            borderEffect: 'absolute inset-0 bg-blue-500/20 rounded-3xl blur-xl',
            content: {
                background: 'relative bg-white/95 backdrop-blur-sm rounded-2xl p-8',
                header: {
                    title: 'md:text-2xl text-xl font-bold text-gray-900',
                    titleIcon: 'w-3 h-3 bg-green-500 rounded-full animate-pulse'
                },
                description: 'text-gray-600 mb-8',
                search: {
                    background: 'group relative overflow-hidden rounded-xl bg-gray-50 hover:bg-blue-50 p-4 hover:shadow-lg transition-all duration-300',
                    icon: 'w-4 h-4 text-white-600 mr-2'
                }
            },
            services: {
                text: 'text-blue-600',
            },
            effects: [
                'absolute -top-6 -right-6 w-24 h-24 bg-blue-400/60 rounded-full blur-xl opacity-60 animate-bounce',
                'absolute -bottom-6 -left-6 w-32 h-32 bg-blue-300/40 rounded-full blur-xl opacity-40 animate-ping'
            ],
        }
    },
    services: {
        section: 'py-24 bg-white relative overflow-hidden',
        backgroundPattern: 'absolute inset-0 opacity-30',
        badge: {
            container: 'inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6',
            icon: 'w-4 h-4 text-blue-600 mr-2',
            text: 'text-blue-800 text-sm font-semibold'
        },
        title: {
            container: 'text-4xl lg:text-6xl font-bold mb-6',
            part1: 'text-gray-900',
            part2: 'text-blue-600'
        },
        description: 'text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed',
        card: {
            glow: 'absolute inset-0 bg-blue-500/10 rounded-3xl blur-xl group-hover:opacity-20 transition-all duration-500',
            container: 'relative bg-blue-50 border-0 shadow-xl shadow-gray-900/5 rounded-3xl overflow-hidden group-hover:shadow-2xl transition-all duration-500 hover:scale-105 pt-0',
            topBar: 'h-1 bg-blue-600',
            iconContainer: 'w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg',
            icon: 'w-8 h-8 text-white',
            title: 'text-2xl group-hover:text-blue-600 transition-colors',
            description: 'text-gray-600 text-base',
            featureDot: 'w-2 h-2 bg-blue-600 rounded-full mr-3',
            featureText: 'text-gray-700',
            price: 'text-xl font-bold text-blue-600'
        },
        featureCard: {
            iconContainer: 'w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-all duration-500',
            icon: 'w-10 h-10 text-white',
            title: 'text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors',
            description: 'text-gray-600 leading-relaxed'
        }
    },
    servicosDetalhados: {
        statsCard: {
            glow: 'absolute inset-0 bg-blue-500/10 rounded-3xl blur-xl group-hover:opacity-20 transition-all duration-500',
            container: 'relative bg-blue-50 border-0 shadow-xl rounded-3xl overflow-hidden group-hover:shadow-2xl transition-all duration-500 hover:scale-105',
            iconContainer: 'w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-3',
            icon: 'w-6 h-6 text-white',
            value: 'text-2xl font-bold text-blue-600 mb-1',
            label: 'text-gray-700 text-sm font-medium'
        },
        filterCard: {
            glow: 'absolute inset-0 bg-blue-500/5 rounded-3xl blur-xl',
            container: 'relative bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-3xl',
            button: {
                active: 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg',
                inactive: 'border-gray-200 hover:bg-blue-50 hover:border-blue-300'
            }
        },
        serviceCard: {
            glow: 'absolute inset-0 bg-blue-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500',
            container: 'relative pt-0 bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-3xl overflow-hidden group-hover:shadow-2xl group-hover:shadow-blue-500/10 transition-all duration-500 hover:scale-105 h-full flex flex-col',
            topBar: 'h-1 bg-blue-600',
            iconContainer: 'w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg',
            icon: 'w-8 h-8 text-white',
            ratingContainer: 'flex items-center space-x-1 bg-yellow-50 px-3 py-1 rounded-full',
            star: {
                filled: 'text-yellow-400 fill-current',
                empty: 'text-gray-300'
            },
            ratingText: 'text-sm font-bold ml-1 text-yellow-600',
            title: 'text-2xl group-hover:text-blue-600 transition-colors',
            description: 'text-gray-600 text-base',
            priceBox: {
                container: 'bg-blue-50 rounded-xl p-3',
                label: 'text-xs text-blue-600 font-medium mb-1',
                value: 'text-sm font-bold text-blue-800'
            },
            durationBox: {
                container: 'bg-blue-50 rounded-xl p-3',
                label: 'text-xs text-blue-600 font-medium mb-1',
                value: 'text-sm font-bold text-blue-800'
            },
            featureItem: {
                container: 'flex items-center text-sm text-gray-600',
                icon: 'w-3 h-3 text-blue-500 mr-2 flex-shrink-0',
                moreText: 'text-xs text-blue-600 font-medium'
            },
            brandBadge: {
                active: 'text-xs border-blue-200 bg-blue-50 text-blue-700',
                more: 'text-xs bg-gray-100 text-gray-700'
            },
            reviewIcon: 'w-4 h-4 text-blue-500',
            button: {
                primary: 'flex-1 bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all duration-300',
                outline: 'border-blue-200 hover:bg-blue-50'
            }
        },
        emergency: {
            glow: 'absolute inset-0 bg-red-500/20 rounded-3xl blur-2xl',
            container: 'relative bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 text-center overflow-hidden',
            patternDot: 'absolute w-2 h-2 bg-white rounded-full',
            title: 'text-3xl font-bold text-white mb-4',
            description: 'text-white/90 mb-6 text-lg max-w-2xl mx-auto',
            button: {
                primary: 'bg-white text-red-600 hover:bg-red-50 shadow-2xl transition-all duration-300 hover:scale-105',
                outline: 'border-white/30 text-red-600 hover:text-red-500 hover:bg-white/60 backdrop-blur-sm transition-all duration-300'
            }
        },
        faq: {
            glow: 'absolute inset-0 bg-blue-500/5 rounded-3xl blur-xl',
            container: 'relative bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-3xl',
            card: 'bg-blue-50 rounded-2xl p-6',
            question: 'font-semibold text-gray-900 mb-2',
            answer: 'text-gray-600 text-sm'
        }
    },
    agendamentoForm: {
        step: {
            active: 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/25',
            inactive: 'border-gray-300 text-gray-400 bg-white',
            activeLabel: 'text-blue-600',
            inactiveLabel: 'text-gray-400',
            description: 'text-xs text-gray-500'
        },
        formCard: {
            glow: 'absolute inset-0 bg-blue-500/5 rounded-3xl blur-xl',
            container: 'relative bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-3xl overflow-hidden pt-0',
            header: 'bg-gradient-to-r from-blue-50 to-blue-100 border-b border-blue-200 pt-3',
            title: 'text-2xl text-blue-900',
            description: 'text-blue-700'
        },
        input: {
            label: 'text-gray-700 font-medium',
            field: 'h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl',
            button: 'h-12 px-4 border-blue-200 hover:bg-blue-50 rounded-xl'
        },
        productCard: {
            selected: 'opacity-100 shadow-lg border-2 border-blue-500 bg-blue-50 text-blue-600 fill-blue-600',
            unselected: 'opacity-80 hover:opacity-100 shadow-sm hover:shadow-lg border-2 border-transparent text-gray-400 hover:text-blue-400 fill-gray-400 hover:fill-blue-400'
        },
        periodOption: 'flex items-center pl-4 space-x-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors',
        periodYearOption: 'flex items-center pl-4 space-x-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors',
        confirmation: {
            successBox: 'bg-gradient-to-r from-blue-50 to-emerald-50 border border-blue-200 rounded-2xl p-6',
            successTitle: 'font-bold text-blue-800 mb-4 text-xl',
            successText: 'text-blue-700',
            infoBox: 'bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-6',
            infoTitle: 'font-bold text-blue-800 mb-4 text-lg',
            infoText: 'text-blue-700',
            checkIcon: 'w-5 h-5 mr-2 mt-0.5 text-blue-600'
        },
        button: {
            prev: 'h-12 px-6 border-gray-200 hover:bg-gray-50 rounded-xl transition-all duration-300',
            next: 'h-12 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg transition-all duration-300 hover:scale-105',
            confirm: 'h-12 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg transition-all duration-300 hover:scale-105',
            calendar: 'w-full h-12 justify-start text-left font-normal border-gray-200 hover:bg-blue-50 rounded-xl'
        }
    },
    header: {
        container: 'bg-white shadow-sm border-t border-gray-100',
        logoText: 'font-bold text-xl text-gray-900',
        nav: {
            link: 'text-gray-600 hover:text-blue-600 transition-colors'
        },
        phone: {
            container: 'hidden lg:flex items-center space-x-2 text-sm text-gray-600',
            icon: 'w-4 h-4'
        },
        button: 'bg-blue-600 hover:bg-blue-700 text-white hover:scale-105'
    },
    unidadesHome: {
        section: 'py-24 bg-gray-50 relative overflow-hidden',
        backgroundPattern: 'absolute inset-0 opacity-30',
        badge: {
            container: 'inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6',
            icon: 'w-4 h-4 text-blue-600 mr-2',
            text: 'text-blue-800 text-sm font-semibold'
        },
        title: {
            container: 'text-4xl lg:text-6xl font-bold mb-6',
            part1: 'text-gray-900',
            part2: 'text-blue-600'
        },
        description: 'text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed',
        searchCard: {
            glow: 'absolute inset-0 bg-blue-500/20 rounded-3xl blur-xl',
            container: 'relative bg-white/80 backdrop-blur-xl border-0 shadow-2xl shadow-blue-500/10 rounded-3xl overflow-hidden',
            input: {
                container: 'relative group',
                icon: 'absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 group-focus-within:text-blue-500 transition-colors',
                field: 'pl-12 h-14 text-lg border-0 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 rounded-2xl transition-all duration-300'
            },
            select: {
                container: 'relative group',
                icon: 'absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 group-focus-within:text-blue-500 transition-colors z-10',
                field: 'w-full h-14 pl-12 pr-4 text-lg border-0 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 rounded-2xl transition-all duration-300 appearance-none cursor-pointer'
            },
            resultIndicator: 'w-2 h-2 bg-blue-500 rounded-full animate-pulse'
        },
        unitCard: {
            glow: 'absolute inset-0 bg-blue-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500',
            container: 'relative bg-white/90 backdrop-blur-sm border-0 shadow-xl shadow-gray-900/5 rounded-3xl overflow-hidden group-hover:shadow-2xl group-hover:shadow-blue-500/10 transition-all duration-500 hover:scale-105 pt-0',
            topBar: 'h-1 bg-blue-600',
            title: 'text-xl group-hover:text-blue-600 transition-colors duration-300',
            location: {
                container: 'flex items-center text-gray-600 text-sm',
                icon: 'w-4 h-4 mr-2 text-blue-500'
            },
            rating: {
                container: 'flex items-center space-x-1 bg-yellow-50 px-3 py-1 rounded-full',
                star: {
                    filled: 'text-yellow-400 fill-current',
                    empty: 'text-gray-300'
                },
                text: 'text-sm font-bold ml-1 text-yellow-600'
            },
            addressBox: {
                container: 'bg-gray-50 rounded-2xl p-4',
                label: 'text-sm text-gray-600 mb-1 font-medium',
                value: 'text-sm text-gray-800'
            },
            scheduleBox: {
                container: 'flex items-start space-x-3 bg-blue-50 rounded-2xl p-4',
                icon: 'w-4 h-4 text-blue-500 mt-0.5',
                time: 'text-gray-800 font-medium',
                saturday: 'text-gray-600'
            },
            specialtyBadge: {
                active: 'text-xs border-blue-200 bg-blue-50 text-blue-700',
                more: 'text-xs bg-gray-100 text-gray-700 border-gray-200'
            },
            contact: {
                icon: 'w-4 h-4 text-blue-500',
                text: 'text-sm text-gray-600 font-medium'
            },
            reviewIcon: 'w-3 h-3 mr-1',
            button: {
                primary: 'flex-1 bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all duration-300',
                outline: 'border-gray-200 hover:bg-gray-50 transition-all duration-300'
            }
        },
        noResults: {
            glow: 'absolute inset-0 bg-gray-500/10 rounded-3xl blur-xl',
            container: 'relative bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-3xl',
            iconContainer: 'w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6',
            icon: 'w-10 h-10 text-gray-400',
            title: 'text-2xl font-bold text-gray-900 mb-4',
            description: 'text-gray-600 mb-8 max-w-md mx-auto',
            button: 'bg-blue-50 border-blue-200 hover:bg-blue-100'
        },
        statsCard: {
            glow: 'absolute inset-0 bg-blue-500/10 rounded-3xl blur-xl group-hover:opacity-20 transition-all duration-500',
            container: 'relative bg-blue-50 border-0 shadow-xl shadow-gray-900/5 rounded-3xl overflow-hidden group-hover:shadow-2xl transition-all duration-500 hover:scale-105',
            iconContainer: 'w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg',
            icon: 'w-8 h-8 text-white',
            value: 'text-4xl font-bold mb-2 text-blue-600',
            label: 'text-gray-700 font-medium'
        },
        cta: {
            glow: 'absolute inset-0 bg-blue-500/20 rounded-3xl blur-2xl',
            container: 'relative bg-blue-600 rounded-3xl p-12 text-center overflow-hidden',
            patternDot: 'absolute w-2 h-2 bg-white rounded-full',
            title: 'text-3xl lg:text-4xl font-bold text-white mb-6',
            description: 'text-white/80 mb-8 text-lg max-w-2xl mx-auto',
            button: {
                primary: 'bg-white text-blue-600 hover:bg-blue-50 shadow-2xl transition-all duration-300 hover:scale-105',
                outline: 'border-white/30 bg-white/10 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300'
            }
        }
    },
    howItWorks: {
        section: 'py-20 bg-gray-50',
        header: {
            container: 'text-center mb-16',
            title: 'text-3xl lg:text-4xl font-bold text-gray-900 mb-4',
            description: 'text-xl text-gray-600 max-w-2xl mx-auto'
        },
        steps: {
            container: 'grid md:grid-cols-4 gap-8 mb-12',
            item: 'text-center',
            iconContainer: 'w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4',
            icon: 'w-8 h-8 text-white',
            title: 'text-lg font-bold text-gray-900 mb-2',
            description: 'text-gray-600'
        },
        buttonContainer: 'text-center'
    },
    testimonials: {
        section: 'py-20 bg-white rounded-md',
        header: {
            container: 'text-center mb-16',
            title: 'text-3xl lg:text-4xl font-bold text-gray-900 mb-4',
            description: 'text-xl text-gray-600 max-w-2xl mx-auto mb-8'
        },
        ratingSummary: {
            container: 'flex items-center justify-center space-x-6 mb-8',
            item: 'text-center',
            stars: 'flex items-center justify-center space-x-1 mb-2',
            value: 'text-2xl font-bold text-gray-900',
            label: 'text-sm text-gray-600',
            divider: 'w-px h-12 bg-gray-300'
        },
        star: {
            filled: 'text-yellow-400 fill-current',
            empty: 'text-gray-300'
        },
        grid: 'grid md:grid-cols-3 gap-8 mb-12',
        card: {
            container: 'hover:shadow-lg transition-shadow duration-300',
            content: 'p-6',
            quoteIcon: 'w-8 h-8 text-blue-600 opacity-20',
            comment: 'text-gray-700 mb-6 leading-relaxed',
            serviceBadge: 'inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full mb-4',
            customerInfo: {
                container: 'flex items-center space-x-3',
                avatarFallback: 'bg-blue-100 text-blue-600',
                name: 'font-semibold text-gray-900',
                location: 'text-sm text-gray-600',
                date: 'text-xs text-gray-500'
            }
        },
        navigation: {
            container: 'flex justify-center space-x-2 mb-8',
            dot: {
                base: 'w-3 h-3 rounded-full transition-colors',
                active: 'bg-blue-600',
                inactive: 'bg-gray-300'
            }
        },
        ratingBreakdown: {
            container: 'bg-gray-50 rounded-2xl p-8',
            title: 'text-2xl font-bold text-gray-900 mb-6 text-center',
            content: 'max-w-md mx-auto space-y-3',
            row: 'flex items-center space-x-3',
            starLabel: {
                container: 'flex items-center space-x-1 w-16',
                text: 'text-sm font-medium'
            },
            bar: {
                container: 'flex-1 bg-gray-200 rounded-full h-2',
                fill: 'bg-yellow-400 h-2 rounded-full transition-all duration-500'
            },
            count: 'text-sm text-gray-600 w-12 text-right'
        },
        cta: {
            container: 'text-center mt-12',
            description: 'text-gray-600 mb-4',
            buttons: 'flex flex-col sm:flex-row gap-4 justify-center',
            primary: 'inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors',
            secondary: 'inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors'
        }
    },
    footer: {
        container: 'bg-gray-900 text-white py-16',
        grid: 'grid md:grid-cols-4 gap-8',
        logo: {
            container: 'flex items-center space-x-2 mb-4',
            description: 'text-gray-400 mb-4'
        },
        section: {
            title: 'font-bold text-lg mb-4',
            content: 'space-y-3',
            hours: 'space-y-2'
        },
        contact: {
            item: 'flex items-center space-x-2',
            icon: 'w-4 h-4 text-blue-400',
            text: 'text-gray-300'
        },
        services: {
            list: 'space-y-2 text-gray-300'
        },
        copyright: {
            container: 'border-t border-gray-800 mt-12 pt-8 text-center',
            text: 'text-gray-400'
        }
    },
    page: {
        home: 'min-h-screen bg-white',
        hero: {
            container: 'min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden',
            backgroundEffects: {
                container: 'absolute inset-0',
                effect1: 'absolute top-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse',
                effect2: 'absolute bottom-20 right-20 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse delay-1000'
            },
            gridPattern: {
                container: 'absolute inset-0 opacity-20',
                svg: 'w-full h-full'
            }
        },
        content: {
            container: 'relative container mx-auto px-4 py-12',
            wrapper: 'max-w-4xl mx-auto',
            wrapperLarge: 'max-w-6xl mx-auto',
            wrapperXLarge: 'max-w-7xl mx-auto'
        },
        header: {
            container: 'text-center mb-12',
            badge: 'inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6',
            badgeText: 'text-white/90 text-sm font-medium',
            title: 'text-4xl lg:text-5xl font-bold text-white mb-4',
            description: 'text-white/80 text-lg max-w-2xl mx-auto'
        },
        card: {
            container: 'relative',
            containerWithMargin: 'relative mb-16',
            glow: 'absolute inset-0 bg-blue-500/20 rounded-3xl blur-xl',
            card: 'relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl shadow-blue-500/10 p-8'
        },
        admin: {
            container: 'min-h-screen bg-gray-50',
            login: {
                container: 'relative flex items-center justify-center min-h-screen p-4'
            }
        }
    },
    unidadesList: {
        container: 'space-y-8',
        filters: {
            container: 'relative',
            glow: 'absolute inset-0 bg-blue-500/5 rounded-3xl blur-xl',
            card: 'relative bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-3xl',
            content: 'p-6',
            grid: 'grid md:grid-cols-3 gap-4',
            input: {
                container: 'relative',
                icon: 'absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5',
                field: 'pl-12 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl'
            },
            select: {
                container: 'flex items-center space-x-2',
                icon: 'text-gray-400 h-5 w-5',
                field: 'flex h-12 w-full rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm focus:border-blue-500 focus:ring-blue-500/20 focus:outline-none'
            }
        },
        results: {
            container: 'flex justify-between items-center mb-6',
            count: 'text-gray-700 font-medium',
            tabs: {
                container: 'w-[300px]',
                list: 'bg-blue-50 border border-blue-200',
                trigger: {
                    base: 'flex items-center',
                    active: 'data-[state=active]:bg-blue-600 data-[state=active]:text-white',
                    icon: 'mr-2 h-4 w-4'
                }
            },
            content: {
                lista: 'mt-0',
                grid: 'grid md:grid-cols-2 gap-6',
                mapa: {
                    container: 'mt-0',
                    wrapper: 'relative',
                    glow: 'absolute inset-0 bg-blue-500/5 rounded-3xl blur-xl',
                    map: 'relative h-[600px] rounded-3xl overflow-hidden shadow-xl'
                }
            }
        }
    },
    unidadeCard: {
        container: 'group relative',
        glow: 'absolute inset-0 bg-blue-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500',
        card: 'relative h-full flex flex-col bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-3xl overflow-hidden group-hover:shadow-2xl group-hover:shadow-blue-500/10 transition-all duration-500 hover:scale-105 pt-0',
        topBar: 'h-1 bg-blue-600',
        header: {
            container: 'pb-2',
            titleRow: 'flex justify-between items-start',
            title: 'text-xl group-hover:text-blue-600 transition-colors',
            rating: {
                container: 'flex items-center space-x-1 bg-yellow-50 px-2 py-1 rounded-full',
                text: 'text-sm font-medium ml-1 text-yellow-600'
            },
            location: {
                container: 'flex items-center text-gray-600 text-sm',
                icon: 'w-4 h-4 mr-1 text-blue-500'
            }
        },
        content: 'flex-grow flex flex-col justify-between space-y-4',
        addressBox: {
            container: 'bg-gray-50 rounded-2xl p-4',
            label: 'text-sm text-gray-600 mb-1 font-medium',
            value: 'text-sm text-gray-800'
        },
        scheduleBox: {
            container: 'bg-blue-50 rounded-2xl p-4',
            wrapper: 'flex items-start space-x-2',
            icon: 'w-4 h-4 text-blue-500 mt-0.5',
            time: 'text-gray-800 font-medium',
            saturday: 'text-gray-600',
            domingo: 'text-gray-600'
        },
        specialties: {
            label: 'text-sm text-gray-600 mb-2 font-medium',
            container: 'flex flex-wrap gap-2',
            badge: 'border-blue-200 bg-blue-50 text-blue-700'
        },
        phoneBox: {
            container: 'bg-green-50 rounded-2xl p-4',
            wrapper: 'flex items-center space-x-2',
            icon: 'w-4 h-4 text-green-500',
            text: 'text-sm font-medium text-gray-800'
        },
        footer: {
            container: 'flex justify-between items-center pt-4 border-t border-gray-100',
            reviews: 'text-sm text-gray-600',
            button: 'border-blue-200 hover:bg-blue-50 rounded-xl'
        },
        star: {
            filled: 'text-yellow-400 fill-current',
            empty: 'text-gray-300'
        }
    },
    button: {
        default: 'bg-white text-blue-600 hover:bg-blue-50 border-0 shadow-2xl shadow-blue-500/25 transition-all duration-300',
        secondary: 'border-white/30 bg-white/10 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300',
        primary: 'bg-blue-600 hover:bg-blue-700 text-white border-0 shadow-lg transition-all duration-300',
        outline: 'border-gray-200 hover:bg-gray-50 transition-all duration-300'
    }
}

export default samsung;